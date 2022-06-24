let r = await fetch('http://localhost:9200/blog/user/ccc')
let obj = await r.json()
console.log(obj)