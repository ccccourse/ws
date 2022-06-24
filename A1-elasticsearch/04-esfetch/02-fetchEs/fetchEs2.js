let r = await fetch('http://localhost:9200/blog/user/ccc')
let text = await r.text()
console.log(text)