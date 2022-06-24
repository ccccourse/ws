import { Application } from "https://deno.land/x/oak/mod.ts";
import { Router } from "./Router.js";

const books = new Map();
books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Arthur",
});
books.set("2", {
  id: "2",
  title: "The Old Man",
  author: "Lee Ear",
});
const router = new Router();

router.get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/book", (context) => {
    context.response.body = Array.from(books.values());
  })
  /*
  .get(/\/book\/(\d+)/, (context) => {
    if (context.match) {
      context.response.body = books.get(context.match[1]);
    }
  });
  */
const app = new Application();
app.use(router.routes());

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });
