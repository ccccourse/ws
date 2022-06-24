import { app } from './myoak.js'

app.use(function (ctx) {
  console.log(ctx.request.headers)
  ctx.headers.set('status', 200)
  ctx.headers.set('Content-Type', 'text/html; charset=utf-8')
  ctx.body = "hello 你好!"
})

console.log("App run at http://localhost:8000/")
app.listen(8000)