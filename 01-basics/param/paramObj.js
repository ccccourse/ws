function modifyObj(o) {
  o = { name: 'snoopy' }
}

function modifyObj2(o) {
  o.name = 'snoopy'
}

var a = {
  name: 'ccc'
}

console.log('a=', a)
modifyObj(a)
console.log('a=', a)
modifyObj2(a)
console.log('a=', a)
