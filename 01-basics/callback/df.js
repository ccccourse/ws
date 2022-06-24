function df(f, x, h=0.0001) {
   return (f(x+h)-f(x))/h
}

function square(y) {
  return y*y
}

console.log('df(square, 2)', df(square, 2))
console.log('df(sin(pi/4))', df(Math.sin, Math.PI/4))
