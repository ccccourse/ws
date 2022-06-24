// app.ts
import { Application } from "https://deno.land/x/oak@v6.0.0/mod.ts";
import {
  viewEngine,
  engineFactory,
  adapterFactory,
} from "https://ccc-js.github.io/view-engine/mod.ts";

const ejsEngine = engineFactory.getEjsEngine();
const oakAdapter = adapterFactory.getOakAdapter();

const app = new Application();

app.use(viewEngine(oakAdapter, ejsEngine));

app.use(async (ctx, next) => {
  ctx.render("index.ejs", { data: { name: "John" } });
});

await app.listen({ port: 8000 });
