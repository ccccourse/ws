import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  // ctx.response.type = 'text/plain'
  // ctx.response.type = 'text/html'
  ctx.response.body = `
<html>
  <body>
    <a href="https://tw.youtube.com">YouTube</a>
  </body>
</html>`
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });
