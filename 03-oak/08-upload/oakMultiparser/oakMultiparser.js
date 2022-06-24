import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { multiParser } from 'https://deno.land/x/multiparser/mod.ts'

const router = new Router();

router.get('/', uploadForm)
  .post('/upload', upload);

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

async function uploadForm(ctx) {
  ctx.response.body = `<html>
  <body>
  <h3>Deno http module</h3>
  <form action="/upload" enctype="multipart/form-data" method="post">
    <div>singleStr: <input type="text" name="singleStr" /></div>
    <div>singleImg: <input type="file" name="singleImg"/></div>
    <input type="submit" value="Upload" />
  </form>
  </body>
  </html>
` 
}

async function upload(ctx) {
  console.log('upload() start')
  const form = await multiParser(ctx.request.serverRequest)
  console.log('form=', form)
  if (form) {
    console.log(form)
    let filename = form.files.singleImg.filename
    let content = form.files.singleImg.content
    await Deno.writeFile(`./data/${filename}`, content);
    ctx.response.body = 'success!'
  }
}

let port = 8000
console.log('Server run at http://127.0.0.1:'+port)
await app.listen({ port });
