import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  console.log('url=', ctx.request.url)
  ctx.response.redirect('https://tw.youtube.com')
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });

