## 採用表單方式的通訊範例

採用表單傳遞訊息的範例請參考 Koa 當中的 Blog 範例，其中的 new 功能就有用表單：


程式碼：前端發送部分 -- <https://github.com/koajs/examples/blob/master/blog/views/new.html>

```js
  <h1>New Post</h1>
  <p>Create a new post.</p>
  <form action="/post" method="post">
    <p><input type="text" placeholder="Title" name="title"></p>
    <p><textarea placeholder="Contents" name="body"><` + `/textarea></p>
    <p><input type="submit" value="Create"></p>
  </form>
```

程式碼：後端接收部分 -- <https://github.com/koajs/examples/blob/master/blog/app.js>

```js
router
  .get('/', list)
  .get('/post/new', add)
  .get('/post/:id', show)
  .post('/post', create)
...

async function create (ctx) {
  var post = ctx.request.body
  var id = posts.push(post) - 1
  post.created_at = new Date()
  post.id = id
  ctx.redirect('/')
}
```

由於 koa 已經更新到 2.0 並支持 async/await 的語法，因此我為 koa 做了一些新的範例，請參考 f6 專案。

* <https://github.com/ccckmit/f6>

以下是另外幾篇相關的文章僅供參考！

* [A Simple CRUD Demo with Koa.js](https://weblogs.asp.net/shijuvarghese/a-simple-crud-demo-with-koa-js)

* [Creating and Handling Forms in Node.js](https://www.sitepoint.com/creating-and-handling-forms-in-node-js/)
