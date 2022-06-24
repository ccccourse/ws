var p1 = {
  name:'ccc', 
  age: 50
}

console.log('p1=', p1)
var p1text = JSON.stringify(p1)
console.log('p1text=', p1text)
var p1text2 = JSON.stringify(p1, null, 2)
console.log('p1text2=', p1text2)
var p2 = JSON.parse(p1text)
console.log('p2=', p2)
