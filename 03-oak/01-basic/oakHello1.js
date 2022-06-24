import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application()

function hello(ctx) {
  ctx.response.body = "Hello World!"
}

app.use(hello)

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 })


