import { renderFileToString } from "https://deno.land/x/dejs/mod.ts";

const output = await renderFileToString(`./views/main.ejs`, {title:"Chapter 1"})
console.log(output)
