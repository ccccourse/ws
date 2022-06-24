class Router {
  constructor() {}
  do() {
    console.log('do()')
    return this
  }
  be() {
    console.log('be()')
    return this
  }
  to() {
    console.log('to()')
    return this
  }
}

var r = new Router()

r.to().be().do().to().be()

r.to()
r.be()
r.do()
r.to()
r.be()