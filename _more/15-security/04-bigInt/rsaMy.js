function mpower(a, n, p) {
  let r = a
  for (let i=2; i<=n; i++) {
    r = (r * a) % p
  }
  return r
}

var p = 61n, q = 53n, N = p*q // lcm(61,53)=780
let e = 17n , d = 413n

var M1 = [65n, 22n, 37n, 18n, 29n]
var E1 = []
var M2 = []
for (let m of M1) {
  let c = mpower(m, e, N)
  E1.push(c)
  let m2 = mpower(c, d, N)
  M2.push(m2)
}

console.log('M1=', M1)
console.log('E1=', E1)
console.log('M2=', M2)
