import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as render from './render.js'
// import { DB } from "https://deno.land/x/sqlite/mod.ts";
// const db = new DB("blog.db");
// db.query("CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, body TEXT)");
import { Client } from "https://deno.land/x/postgres/mod.ts";

const db = new Client({
  user: "postgres",
  database: "mydb98",
  hostname: "localhost",
  password: "csienqu",
  port: 5432,
});

await db.connect();

// db.query("CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, body TEXT)");

const router = new Router();

router.get('/', list)
  .get('/post/new', add)
  .get('/post/:id', show)
  .post('/post', create);

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

async function query(sql) {
  console.log('query:sql=', sql)
  var r = await db.queryObject(sql)
  console.log('r=', r)
  let list = []
  for (var row of r.rows) {
    list.push(row)
  }
  return list
}

async function list(ctx) {
  let posts = await query("SELECT id, title, body FROM posts")
  console.log('list:posts=', posts)
  ctx.response.body = await render.list(posts);
}

async function add(ctx) {
  ctx.response.body = await render.newPost();
}

async function show(ctx) {
  const pid = ctx.params.id;
  let posts = await query(`SELECT id, title, body FROM posts WHERE id=${pid}`)
  let post = posts[0]
  console.log('show:post=', post)
  if (!post) ctx.throw(404, 'invalid post id');
  ctx.response.body = await render.show(post);
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
    await db.queryObject(`INSERT INTO posts (title, body) VALUES ('${post.title}', '${post.body}')`);
    ctx.response.redirect('/');
  }
}

console.log('Server run at http://127.0.0.1:8000')
await app.listen({ port: 8000 });
