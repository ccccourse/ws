import { createHash } from 'https://deno.land/std/hash/mod.ts';

function hash(text) {
  const h = createHash('sha256')
  h.update(text)
  return h.toString()
}

let record = {
  nonce: 0,
  data: 'john => mary $2.7',
}

let json = JSON.stringify(record, null, 2)
console.log('json=', json)
const digest = hash(json)

console.log('digest=', digest)
