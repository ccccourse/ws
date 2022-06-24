// app.ts
import { Application, Router } from "https://deno.land/x/oak@v6.0.0/mod.ts";
import {
  viewEngine,
  engineFactory,
  adapterFactory,
} from "https://ccc-js.github.io/view-engine/mod.ts";

const ejsEngine = engineFactory.getEjsEngine();
const oakAdapter = adapterFactory.getOakAdapter();

const app = new Application();
const router = new Router();

router.get('/', async (ctx, next) => {
  console.log('root:/')
  ctx.render("index.ejs", { data: { name: "John" } });
})

app.use(viewEngine(oakAdapter, ejsEngine));
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
