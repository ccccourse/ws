import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { DB } from "https://deno.land/x/sqlite/mod.ts";
import {
  viewEngine,
  engineFactory,
  adapterFactory,
} from "https://deno.land/x/view_engine/mod.ts";

const ejsEngine = engineFactory.getEjsEngine();
const oakAdapter = adapterFactory.getOakAdapter();

const db = new DB("blog.db");
db.query("CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, body TEXT)");

const router = new Router();

router.get('/', list)
  .get('/post/new', add)
  .get('/post/:id', show)
  .post('/post', create)

const app = new Application();
app.use(viewEngine(oakAdapter, ejsEngine));
app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx) => {
  console.log('path=', ctx.request.url.pathname)
  if (ctx.request.url.pathname.startsWith("/public/")) {
    console.log('pass:', ctx.request.url.pathname)
    await send(ctx, ctx.request.url.pathname, {
      root: Deno.cwd(),
      index: "index.html",
    });  
  }
});

function query(sql) {
  let list = []
  for (const [id, title, body] of db.query(sql)) {
    list.push({id, title, body})
  }
  return list
}

async function list(ctx) {
  let posts = query("SELECT id, title, body FROM posts")
  console.log('list:posts=', posts)
  ctx.render("views/list.ejs", {posts});
}

async function add(ctx) {
  console.log('add')
  ctx.render("./views/add.ejs");
  // ctx.response.body = 'add'
}

async function show(ctx) {
  const pid = ctx.params.id;
  let posts = query(`SELECT id, title, body FROM posts WHERE id=${pid}`)
  let post = posts[0]
  console.log('show:post=', post)
  if (!post) ctx.throw(404, 'invalid post id');
  ctx.render('views/show.ejs', {post})
}

async function create(ctx) {
  const body = ctx.request.body()
  if (body.type === "form") {
    const pairs = await body.value
    const post = {}
    for (const [key, value] of pairs) {
      post[key] = value
    }
    console.log('create:post=', post)
    db.query("INSERT INTO posts (title, body) VALUES (?, ?)", [post.title, post.body]);
    ctx.response.redirect('/');
  }
}

console.log('Server run at http://127.0.0.1:8000')
await app.listen({ port: 8000 });
