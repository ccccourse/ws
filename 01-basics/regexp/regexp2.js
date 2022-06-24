var r = /([0-9]+)\.([0-9]+)/g
// var r = /([0-9]{2,5})\.([0-9]+)/g
var text = `321.123 pi=3.14159 e=2.71828`
var m = text.match(r)
console.log('m=', m)
console.log('m[0]=', m[0])
/*
while (true) {
  let m = r.exec(text)
  if (m == null) break
  console.log('m=', m)
}
*/