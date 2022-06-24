let url = Deno.args[0]
console.log('fetch page at : ', url)
const res = await fetch(url);
const data = await res.text();
console.log(data)
