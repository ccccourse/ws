let r = await fetch('http://localhost:9200/blog/user/garfield', {
  method: 'POST',
  body: JSON.stringify({name:"garfield", age: 7}),
  headers: {
      'content-type': 'application/json'
  }
})
let obj = await r.json()
console.log(obj)
// obj._source.name