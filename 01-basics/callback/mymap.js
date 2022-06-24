function mymap(array, f) {
  var list=[]
  // for (var o of array) {
  for (let i=0; i<array.length; i++) {
    var o = array[i]
    var fo = f(o) // square(5), square(2), square(4)
    list.push(fo)
  }
  return list
}

function square(x) {
  return x*x
}

var slist = mymap([5,2,4], square)
console.log(slist)
