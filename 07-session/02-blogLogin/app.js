import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as render from './render.js'
import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { Session } from "https://deno.land/x/oak_sessions/mod.ts";

const db = new DB("blog.db");
db.query("CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, title TEXT, body TEXT)");

const userMap = {
  ccc: { username:'ccc', password: '123' },
  snoopy: { username:'snoopy', password: '321' }
}

const router = new Router();
const session = new Session();

router.get('/', session.initMiddleware(), list)
  .get('/login', loginUi)
  .post('/login', session.initMiddleware(), login)
  .get('/logout', session.initMiddleware(), logout)
  .get('/post/new', add)
  .get('/post/:id', show)
  .post('/post', session.initMiddleware(), create)

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

function query(sql) {
  let list = []
  for (const [id, username, title, body] of db.query(sql)) {
    list.push({id, username, title, body})
  }
  return list
}

async function parseFormBody(body) {
  const pairs = await body.value
  const obj = {}
  for (const [key, value] of pairs) {
    obj[key] = value
  }
  return obj
}

async function loginUi(ctx) {
  ctx.response.body = await render.loginUi();
}

async function login(ctx) {
  const body = ctx.request.body()
  if (body.type === "form") {
    var user = await parseFormBody(body)
    console.log('user=', user)
    var dbUser = userMap[user.username]
    console.log('dbUser=', dbUser)
    if (dbUser.password === user.password) {
      await ctx.state.session.set('user', user)
      console.log('session.user=', await ctx.state.session.get('user'))
      ctx.response.redirect('/');
    } else {
      ctx.response.body = 'Login Fail!'
    }
  }
}

async function logout(ctx) {
   await ctx.state.session.set('user', null)
   ctx.response.redirect('/')
}

async function list(ctx) {
  let posts = query("SELECT id, username, title, body FROM posts")
  console.log('list:posts=', posts)
  let user = await ctx.state.session.get('user')
  console.log('user=', user)
  ctx.response.body = await render.list(posts, user);
}

async function add(ctx) {
  ctx.response.body = await render.newPost();
}

async function show(ctx) {
  const pid = ctx.params.id;
  let posts = query(`SELECT id, username, title, body FROM posts WHERE id=${pid}`)
  let post = posts[0]
  console.log('show:post=', post)
  if (!post) ctx.throw(404, 'invalid post id');
  ctx.response.body = await render.show(post);
}

async function create(ctx) {
  const body = ctx.request.body()
  if (body.type === "form") {
    var post = await parseFormBody(body)
    console.log('create:post=', post)
    var user = await ctx.state.session.get('user')
    console.log('user=', user)
    db.query("INSERT INTO posts (username, title, body) VALUES (?, ?, ?)", [user.username, post.title, post.body]);
    ctx.response.redirect('/');
  }
}

console.log('Server run at http://127.0.0.1:8000')
await app.listen({ port: 8000 });
