export function isPrime(p) {
  for (let i = 2n; i * i <= p; i++) {
    if (p % i === 0n) return false;
  }
  return true;
}

for (let i=2n; i<100n; i++) {
  let b = isPrime(i)
  if (b) console.log(`isPrime(${i})=${isPrime(i)}`)
}
