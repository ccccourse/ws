// 想法：把 e 視為二進位，位元 1 時 r 必須乘 b，位元 0 時不用
export function modPow(b, e, n) { // (b**e) %n
  let r = 1n
  while (e > 0) {
    if ((e % 2n) === 1n) { // 若 e 為奇數
      r = (r * b) % n // r 必須 *b
    }
    e = e / 2n // e 減半
    b = b ** 2n % n // b 倍增
  }
  return r
}

/*
export function modPow(a, n, p) {
  let r = a
  for (let i=2; i<=n; i++) {
    r = (r * a) % p
  }
  return r
}
*/
