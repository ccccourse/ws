import { app } from './myoak.js'

app.use(function (ctx) {
  ctx.body = `<html><body>
    <a href="https://tw.youtube.com">YouTube</a>
    </body></html>`
})

console.log("App run at http://localhost:8000/")
app.listen(8000)
