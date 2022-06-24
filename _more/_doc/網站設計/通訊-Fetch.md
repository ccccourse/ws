
## 採用 AJAX 方式的通訊範例

和上面使用表單的 post/get 方式類似，我們可以透過 JavaScript 來送出訊息給 Server 端並接收回應，這種《傳送/接收》方式，稱為 [AJAX](https://zh.wikipedia.org/wiki/AJAX) (Asynchronous JavaScript and XML, 非同步的JavaScript與XML技術)。

前端工程師常用兩種方法來《傳送/接收》 AJAX post/get 訊息，一種是使用 jQuery 套件，另一種是不依賴 jQuery，而是直接採用原生的瀏覽器 JavaScript API (被戲稱為 Vanilla.js) 。

使用 jQuery 的 post 程式碼：

```js
<script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script>
$.ajax({
  type: 'POST',
  url: "path/to/api",
  data: "banana=yellow",
  success: function (data) {
    alert("Success: " + data);
  },
});
</script>
```

使用原生的 JavaScript API 的 post 程式碼：

```js
var r = new XMLHttpRequest();
r.open("POST", "path/to/api", true);
r.onreadystatechange = function () {
  if (r.readyState != 4 || r.status != 200) return;
  alert("Success: " + r.responseText);
};
r.send("banana=yellow");
```

如果您想了解完整的 AJAX 範例，可以參考 f6 當中的程式碼

* 前端 -- <https://github.com/ccckmit/f6/blob/master/web/ex5-blogInAjax/main.js>
* 後端 -- <https://github.com/ccckmit/f6/blob/master/web/ex5-blogInAjax/server.js>

重要程式碼：

前端: https://github.com/ccckmit/f6/blob/master/web/ex5-blogInAjax/server.js

```js
var Koa = require('koa')
var Router = require('koa-router')
var logger = require('koa-logger')
var koaStatic = require('koa-static')
var bodyParser = require('koa-bodyparser')

var app = new Koa()
var router = new Router()

app.use(bodyParser())

var posts = []

app.use(logger())

router
  .get('/', listPosts)
  .get('/post/:id', getPost)
  .post('/post', createPost)

async function listPosts (ctx) {
  ctx.body = JSON.stringify(posts)
}

async function getPost (ctx) {
  var id = parseInt(ctx.params.id)
  console.log('getpost: id=%d posts=%j', id, posts)
  var post = posts[id]
  if (!post) ctx.throw(404, 'invalid post id')
  ctx.body = await JSON.stringify(post)
}

async function createPost (ctx) {
  console.log('createPost:rawBody=%s', ctx.request.rawBody)
  console.log('createPost:body=%j', ctx.request.body)
  var post = ctx.request.body
  var id = posts.push(post) - 1
  post.created_at = new Date()
  post.id = id
  ctx.body = JSON.stringify(post)
}

app.use(router.routes()).use(koaStatic('../')).listen(3000)
```

client : <https://github.com/ccckmit/f6/blob/master/web/ex5-blogInAjax/main.js>

```js
var content, title
// var posts = []

async function main () {
  f6.route(/^$/, list)
    .route(/^post\/new/, add)
    .route(/^post\/(\w+?)/, show)
    .route(/^post/, create)
  await f6.onload(init)
}

function init() {
  title = f6.one('title')
  content = f6.one('#content')
}

async function add () {
  title.innerHTML = 'New Post'
  content.innerHTML = `
  <h1>New Post</h1>
  <p>Create a new post.</p>
  <form>
    <p><input id="addTitle" type="text" placeholder="Title" name="title"></p>
    <p><textarea id="addBody" placeholder="Contents" name="body"></textarea></p>
    <p><input type="button" value="Create" onclick="create()"></p>
  </form>
  `
}

async function create () {
  var post = {
    title: f6.one('#addTitle').value,
    body: f6.one('#addBody').value,
    created_at: new Date()
  }
  console.log(`create:post=${JSON.stringify(post)}`)
  await f6.ojax({method: 'POST', url: '/post'}, post)
//  posts.push(post)
  f6.go('') // list #
}

async function show (m) {
  var id = parseInt(m[1])
  var post = await f6.ojax({method: 'GET', url: `/post/${id}`})
//  var post = posts[id]
  content.innerHTML = `
  <h1>${post.title}</h1>
  <p>${post.body}</p>
  `
}

async function list () {
  var posts = await f6.ojax({method: 'GET', url: '/'})
  title.innerHTML = 'Posts'
  content.innerHTML =
  `<h1>Posts</h1>
  <p>You have <strong>${posts.length}</strong> posts!</p>
  <p><a href="#post/new">Create a Post</a></p>
  <ul id="posts">
    ${posts.map(post => `
      <li>
        <h2>${post.title}</h2>
        <p><a href="#post/${post.id}">Read post</a></p>
      </li>
    `).join('\n')}
  </ul>
  `
}

main()
```
