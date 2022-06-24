var r = /(\d+)\.(\d+)/g
var text = `pi=3.14359 e=2.71828`
var m = text.match(r)
console.log('m=', m)

while (true) {
  let m = r.exec(text)
  if (m == null) break
  console.log('m=', m)
}