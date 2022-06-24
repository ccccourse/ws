# Node.js 網站設計 -- 安全性

## 實務 -- Node.js

* [Koa2项目安全加固建议--完整版](https://cnodejs.org/topic/5a502debafa0a121784a89c3)
* [koa-helmet: 设置Http头保障应用程序安全](https://juejin.im/post/5bd1e6136fb9a05d0a057316)
* https://helmetjs.github.io/docs/

## 理論 -- 參考

* [4 Simple Steps to Secure Your Express Node Application](http://scottksmith.com/blog/2014/09/04/simple-steps-to-secure-your-express-node-application/)
* XSS -- [Secure Node Apps Against OWASP Top 10 - Cross Site Scripting](http://scottksmith.com/blog/2015/06/22/secure-node-apps-against-owasp-top-10-cross-site-scripting/)
* [Secure Node Apps Against OWASP Top 10 - Cross Site Request Forgery](http://scottksmith.com/blog/2015/06/29/secure-node-apps-against-owasp-top-10-cross-site-request-forgery/)
* [Secure Node Apps Against OWASP Top 10 - Authentication & Sessions](http://scottksmith.com/blog/2015/06/15/secure-node-apps-against-owasp-top-10-authentication-and-sessions/)
* [Secure Node Apps Against OWASP Top 10 - Injection](http://scottksmith.com/blog/2015/06/08/secure-node-apps-against-owasp-top-10-injection/)



## XSS -- Cross-site scripting (跨網站指令碼)

* XSS -- [Secure Node Apps Against OWASP Top 10 - Cross Site Scripting](http://scottksmith.com/blog/2015/06/22/secure-node-apps-against-owasp-top-10-cross-site-scripting/)

範例

```html
<html>

  <a href="https://site.com/search?q=<script>alert('hacked')</script>">
    Click Here
  </a>

</html>
```

解決方式

* always validate, escape, or sanitize user input.


```
<script>alert('hacked')</script>
```

escape 之後

```
>script<alert('hacked')>/script<
```

* tell the web browser to allow content only from trusted sources (例如使用 helmet)

```js
var express = require('express');
var helmet  = require('helmet');

var app = express();

app.use(helmet.csp({
  defaultSrc: ["'self'"],
  scriptSrc: ['*.google-analytics.com'],
  styleSrc: ["'unsafe-inline'"],
  imgSrc: ['*.google-analytics.com'],
  connectSrc: ["'none'"],
  fontSrc: [],
  objectSrc: [],
  mediaSrc: [],
  frameSrc: []
}));

app.listen(80);
```

## CSRF -- Cross Site Request Forgery (跨站請求偽造)

* [Secure Node Apps Against OWASP Top 10 - Cross Site Request Forgery](http://scottksmith.com/blog/2015/06/29/secure-node-apps-against-owasp-top-10-cross-site-request-forgery/)

Scenario 1: Changes allowed via GET requests

Solution: The solution here is very simple. Never allow changes to occur on GET requests. Only allow changes to be made when the HTTP method is POST, PUT, or DELETE.

Scenario 2: Posting exploited data to sites

Solution : The solution here is to implement the synchronizer token pattern.

```
var express = require('express');
var csrf    = require('csurf');

var app = express();

app.use(csrf());

app.use(function(req, res, next) {
  res.locals._csrf = req.csrfToken();
  next();
});

//Add _csrf to rendered HTML forms as hidden field (see HTML below)

app.listen(80);
```

前端

```
<html>

  <form method="post" action="transfer">
    <input type="hidden" name="_csrf" value="_csrf">
    <input type="text" name="to">
    <input type="test" name="dollars">
  </form>

</html>
```

Scenario 3: Bypassing CSRF protections

前端

```
<form method="post">
 <input type="text" name="to" value="">
 <input type="text" name="dollars" value="">
 <input type="hidden" name="csrf" value="a0d73b12">
</form>
```

後端

```
app.post('/transfer', function (req, res) {
  if (isValid(req.body.csrfToken)) {
    var to = req.params.to || req.body.to;
    var dollars = req.params.dollars || req.body.dollars;

    //Transfer money
  }
});
```

防禦

```
var express = require('express');
var helmet  = require('helmet');

var app = express();

app.use(helmet.xframe('deny'));       //never allow in frames

app.listen(80);
```

## Authentication & Sessions

* [Secure Node Apps Against OWASP Top 10 - Authentication & Sessions](http://scottksmith.com/blog/2015/06/15/secure-node-apps-against-owasp-top-10-authentication-and-sessions/)

Broken Authentication and Session Management

Scenario 1: Plain text passwords

解決 : 密碼加鹽

```
var bcrypt = require('bcrypt-nodejs');

var hashPassword = function(password, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return callback(err);

    bcrypt.hash(password, salt, null, function(err, hash) {
      if (err) return callback(err);

      callback(null, hash);
    });
  });
};

var verifyPassword = function(password, hash, callback) {
  bcrypt.compare(password, hash, function(err, isMatch) {
    if (err) return callback(err);

    callback(null, isMatch);
  });
};
```

Scenario 2: Session IDs in the URL

> https://bank.com/account?sessionid=1234567

解法: Pass session IDs via cookies and not the URL

```
var express = require('express');
var session = require('express-session');

var app = express();

app.use(session({
  secret: 'our super secret session secret',
  cookie: { maxAge: 3600000 } // 2 hours in milliseconds
}));

app.listen(80);
```

Scenario 3: Site accessed over HTTP

Solution 1: 改用 https
Solution 2: 不允許 cookies to be sent over HTTP
Solution 3: not allow client side scripts access to your cookies
Solution 4:  tell the browser to never make HTTP requests again (HTTP Strict Transport Security) (HSTS).

## Injection

* [Secure Node Apps Against OWASP Top 10 - Injection](http://scottksmith.com/blog/2015/06/08/secure-node-apps-against-owasp-top-10-injection/)

Scenario 1: SQL Injection

Solution 1: Escape user input

Solution #2: Parameterized SQL queries

```
"SELECT * FROM users WHERE user = $1 AND pass = $2";
```

Scenario 2: Node Injection

Solution : Never use eval() with user input.

Scenario 3: MongoDB Injection

問題程式:   

```
db.users.find({user: user, pass: pass});
```

駭客方法:

```
POST /login HTTP/1.1
Host: example.com
Content-Type: application/json

{
    "user": {"$gt": ""},
    "pass": {"$gt": ""}
}
```

解決方法:

```
  db.users.find({user: { $in: [user] }, pass: { $in: [pass] }});
```

* [4 Simple Steps to Secure Your Express Node Application](http://scottksmith.com/blog/2014/09/04/simple-steps-to-secure-your-express-node-application/)



