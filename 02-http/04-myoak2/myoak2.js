let app = {}

let flist = []

app.use = function(f) {
   flist.push(f)
}

app.use(function (ctx) {
  ctx.isHello = true
  console.log('hello!')
})

app.use(function (ctx) {
  console.log('ctx=', ctx)
  console.log('world!')
})

var myctx = {
  url: '/aaa/bbb'
}

app.run = function () {
  for (let f of flist) {
    f(myctx)
  }
}

app.run()

