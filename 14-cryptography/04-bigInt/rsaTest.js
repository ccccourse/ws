import * as rsa from "./rsa.ts"

let key = rsa.genKeyPair()

console.log('key=', key)

let m = 123456789n
let c = rsa.encrypt(key, m)
let m2 = rsa.decrypt(key, c)
console.log('m=', m)
console.log('m2=', m2)
