import * as B from './bigInt.ts'

/*
假設愛麗絲想要通過一個不可靠的媒體接收鮑伯的一條私人訊息。她可以用以下的方式來產生一個公鑰和一個私鑰：

隨意選擇兩個大的質數{\displaystyle p}p和{\displaystyle q}q，{\displaystyle p}p不等於{\displaystyle q}q，計算{\displaystyle N=pq}N=pq。
根據歐拉函數，求得{\displaystyle r=\varphi (N)=\varphi (p)\times \varphi (q)=(p-1)(q-1)}{\displaystyle r=\varphi (N)=\varphi (p)\times \varphi (q)=(p-1)(q-1)}
選擇一個小於{\displaystyle r}r的整數{\displaystyle e}e，使{\displaystyle e}e與{\displaystyle r}r互質。並求得{\displaystyle e}e關於{\displaystyle r}r的模反元素，命名為{\displaystyle d}d（求{\displaystyle d}d令{\displaystyle ed\equiv 1{\pmod {r}}}{\displaystyle ed\equiv 1{\pmod {r}}}）。（模反元素存在，若且唯若{\displaystyle e}e與{\displaystyle r}r互質）
將{\displaystyle p}p和{\displaystyle q}q的記錄銷毀。
{\displaystyle (N,e)}(N,e)是公鑰，{\displaystyle (N,d)}(N,d)是私鑰。愛麗絲將她的公鑰{\displaystyle (N,e)}(N,e)傳給鮑伯，而將她的私鑰{\displaystyle (N,d)}(N,d)藏起來。
*/
const keySize=100

export function genKeyPair() {
  let p = B.randomPrime(keySize)!, q=B.randomPrime(keySize)!
  let N = p*q, r=(p-1n)*(q-1n)
  let e = B.randomPrime(keySize)! // e<r
  console.log('e=', e)
  console.log('r=', r)
  let d = B.modInv(e, r)! // ed=1 mod r, d 如何找？ 找一個 k 使(k*r+1)%e == 0
  // 找 k 的方法參考 -- https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm
  console.log('e*d mod r=', (e*d)%r)
  return {e,d,N}
}

export function encrypt(key:any, m:bigint) {
  let {e, N} = key
  return B.modPow(m, e, N)
}

export function decrypt(key:any, c:bigint) {
  let {d, N} = key
  return B.modPow(c, d, N)
}
