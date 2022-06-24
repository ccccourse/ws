// Fermat 小定理：若 n 是質數，則 a^{n-1} mod n = 1
// Pseudo Prime 偽質數：若 a^{n-1} mod n = 1
import * as B from './bigInt.ts'

function pseudoPrime(n:bigint) {
    return B.modPow(2n, n-1n, n)==1n
}

function main() {
    let r = B.randomBigInt(100)
    console.log('r=', r)

    let t = B.modPow(2n, 5n, 9n)
    console.log('t=', t)

    for (let i=3n; i<100n; i++) {
        if (pseudoPrime(i)) console.log(i, 'pass prime test')
    }
}

main()
