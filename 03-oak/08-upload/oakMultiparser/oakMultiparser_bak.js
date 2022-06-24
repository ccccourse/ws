import { serve } from "https://deno.land/std/http/server.ts";
import { multiParser } from 'https://deno.land/x/multiparser/mod.ts'

const s = serve({ port: 8000 });
for await (const req of s) {
  if (req.url === "/upload") {
    const form = await multiParser(req)
    if (form) {
      console.log(form)
      let filename = form.files.singleImg.filename
      let content = form.files.singleImg.content
      await Deno.writeFile(`./data/${filename}`, content);
    }
  }

  req.respond({
    headers: new Headers({ "Content-Type": "text/html; charset=utf-8" }),
    body: `
    <h3>Deno http module</h3>
    <form action="/upload" enctype="multipart/form-data" method="post">
      <div>singleStr: <input type="text" name="singleStr" /></div>
      <div>singleImg: <input type="file" name="singleImg"/></div>
      <input type="submit" value="Upload" />
    </form>
  ` });
}