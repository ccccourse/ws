import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import {
  viewEngine,
  engineFactory,
  adapterFactory,
} from "https://ccc-js.github.io/view-engine/mod.ts" // from "https://deno.land/x/view_engine/mod.ts";
import { get, post } from "./essearch.js";

const ejsEngine = engineFactory.getEjsEngine();
const oakAdapter = adapterFactory.getOakAdapter();

const router = new Router();

router
  .get('/', (ctx)=>{
    ctx.response.redirect('/public/search.html')
  })
  .get('/search', search)
  .get('/public/(.*)', pub)

const app = new Application();
app.use(viewEngine(oakAdapter, ejsEngine));
app.use(router.routes());
app.use(router.allowedMethods());

async function search(ctx) {
  // const query = ctx.params.query
  const query = ctx.request.url.searchParams.get('query')
  console.log('query=', query)
  // let docs = await get('/es/page/_search', {page:query})
  let docs = [
    { url:'http://misavo.com', title:'ccc at misavo', page: 'hello ccc'},
    { url:'http://ccc.com/abc', title: 'ccc and abc', page: 'ccc abc'},
  ]
  // ctx.response.body = docs
  ctx.render('views/searchResult.ejs', {docs:docs})
}

async function pub(ctx) {
  // console.log(ctx.params);
  var path = ctx.params[0]
  await send(ctx, path, {
    root: Deno.cwd()+'/public',
    index: "index.html",
  });
}

console.log('Server run at http://127.0.0.1:8000')
await app.listen({ port: 8000 });
