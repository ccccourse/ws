// https://doc.deno.land/builtin/stable#Deno.readTextFile
const data = await Deno.readTextFile("readAsync.js");
console.log(data);