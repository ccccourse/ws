import * as B from './bigInt.ts'

let r = B.randomBigInt(100)
console.log('r=', r)
console.log('isPrime(r)=', B.isPrime(r))

let p = 2168800793765936984686210592376586144510492082787099063028443587189966802549907290827442681374512259n
console.log('p=', p)
// console.log('isPrime(p)=', B.isPrime(p))
console.log('isPrimeSlow(p)=', B.isPrimeSlow(p))

let q = 0x13939132400309341n
console.log('q=', q)


console.log('extEuclid(30n, 27n)=', B.extEuclid(30n, 27n))

let {t,u} = B.decompose(100n)
console.log(`t=${t} u=${u}`)

console.log('witness(2,100)=', B.witness(2n, 100n))
console.log('witness(2,99)=', B.witness(2n, 99n))
console.log('witness(2,97)=', B.witness(2n, 97n))

console.log('millerRabinPrime(97)=', B.millerRabinPrime(97n, 10n))
console.log('millerRabinPrime(98)=', B.millerRabinPrime(98n, 10n))
console.log('millerRabinPrime(99)=', B.millerRabinPrime(99n, 10n))

for (let i=0; i<5; ) {
    let r = B.randomBigInt(100)
    if (B.millerRabinPrime(r, 10n)) {
        console.log(`millerRabinPrime(${r}) pass`)
        i++
    }
}

console.log('modInv(3,7)=', B.modInv(3n,7n))
console.log('modInv(19,37)=', B.modInv(19n,37n))

console.log('randomPrime(100)=', B.randomPrime(100))