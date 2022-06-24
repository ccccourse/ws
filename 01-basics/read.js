// https://doc.deno.land/builtin/stable#Deno.readTextFile
const data = Deno.readTextFileSync("read.js");
console.log(data);
