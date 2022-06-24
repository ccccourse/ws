import { get, post } from '../esearch.js'
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/page", async (context) => {
    let r = await get('/es3/page/_search')
    let pages = r.hits.hits
    context.response.body = pages;
  })
  .get("/page/query/:q", async (context) => {
    let r = await get('/es3/page/_search', {content:context.params.q})
    let pages = r.hits.hits
    context.response.body = pages;
  })
  /*
  .get("/page/:id", (context) => {
    if (context.params && context.params.id && books.has(context.params.id)) {
      context.response.body = books.get(context.params.id);
    }
  });
  */

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });
