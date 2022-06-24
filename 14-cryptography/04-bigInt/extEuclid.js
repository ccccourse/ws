// gcd(a,b)= ri =si+bti
export function extEuclid(a, b) {
    // var s0, s, t, t0, r, r0
    let [s0,s] = [1n,0n] // let s0 = 1n, s = 0n // let [s0,s] = [1n,0n]
    let [t0,t] = [0n,1n] // let t0 = 0n, t = 1n // let [t0,t] = [0n,1n]
    let [r0,r] = [a,b] // let r0 = a, r = b   // let [r0,r] = [a,b]
    if (b === 0n)
        return [1n, 0n, a]
    else {
        while (r != 0n) {
            let q = r0/r
            let rt=r; r=r0-q*rt; r0=rt; // [r0, r] = [r, r0-q*r]
            let st=s; s=s0-q*st; s0=st; // [s0, s] = [s, s0-q*s]
            let tt=t; t=t0-q*tt; t0=tt; // [t0, t] = [t, t0-q*t]
        }
    }
    return [s0, t0, r0]
}

console.log('extEuclid(30n, 27n)=', extEuclid(30n, 27n))
