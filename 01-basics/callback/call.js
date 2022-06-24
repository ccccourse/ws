function mycall(f) {
  f()
}

function hello() {
  console.log('hello')
}

mycall(hello)
