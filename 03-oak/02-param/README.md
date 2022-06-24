# deno oak param

* [Deno 几种常用的传参方式](https://zhuanlan.zhihu.com/p/147776578)

## oakInfo.js

```
PS D:\ccc\ccc109a\ws\deno\04-oak\01-basic> deno run -A oakInfo.js
Check file:///D:/ccc/ccc109a/ws/deno/04-oak/01-basic/oakInfo.js
start at : http://127.0.0.1:8000
```

然後開啟 http://127.0.0.1:8000/user?name=ccc&age=50

```
url= URL { href: "http://127.0.0.1:8000/user?name=ccc&age=50", origin: "http://127.0.0.1:8000", protocol: "http:", username: "", password: "", host: "127.0.0.1:8000", hostname: "127.0.0.1", port: "8000", pathname: "/user", hash: "", search: "?name=ccc&age=50" }
```

瀏覽器上顯示

```
    method=GET
    url=http://127.0.0.1:8000/user?name=ccc&age=50
    protocol=http:
    hostname=127.0.0.1
    pathname=/user
    hash=
    search=?name=ccc&age=50
    searchParams=name=ccc&age=50
    searchParams.get('name')=ccc
    headers={}
```



