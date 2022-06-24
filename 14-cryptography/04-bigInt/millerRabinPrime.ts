// Fermat 定理：若 n 是質數，則 a^{n-1} mod n = 1
// Pseudo Prime 偽質數：若 a^{n-1} mod n = 1
import * as B from './bigInt.ts'

function decompose(m:bigint) { // m=2^t * u
    let u = m
    for (var t=0n; u%2n==0n; u=u/2n) {
        t++
    }  
    return {t, u}
}

function witness(a:bigint, n:bigint) {
    let {t, u} = decompose(n-1n)
    let x = B.modPow(a, u, n)
    for (let i=1n; i<=t; i++) {
        let xn = B.modPow(x, 2n, n)
        if (xn==1n && x!=1n && x!=n-1n)
            return true
        x = xn
    }
    if (x != 1n) return true
    return false
}

function millerRabinPrime(n:bigint, s:bigint) {
    let len = n.toString().length
    for (let i=1n; i<=s; i++) {
        let a = B.randomBigInt(len)%n
        if (witness(a,n))
            return false
    }
    return true
}

function main() {
    let {t,u} = decompose(100n)
    console.log(`t=${t} u=${u}`)

    console.log('witness(2,100)=', witness(2n, 100n))
    console.log('witness(2,99)=', witness(2n, 99n))
    console.log('witness(2,97)=', witness(2n, 97n))

    console.log('millerRabinPrime(97)=', millerRabinPrime(97n, 10n))
    console.log('millerRabinPrime(98)=', millerRabinPrime(98n, 10n))
    console.log('millerRabinPrime(99)=', millerRabinPrime(99n, 10n))

    for (let i=0; i<5; ) {
        let r = B.randomBigInt(100)
        if (millerRabinPrime(r, 10n)) {
            console.log(`millerRabinPrime(${r}) pass`)
            i++
        }
    }
}

main()
