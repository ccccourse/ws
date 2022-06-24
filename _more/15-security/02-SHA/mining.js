import { createHash } from 'https://deno.land/std/hash/mod.ts';

function hash(text) {
  const h = createHash('sha256')
  h.update(text)
  return h.toString()
}

let record = {
  nonce: 0,
  data: 'john => mary : $2.7; george => john : $1.3',
}

function mining(record) {
  for (var i=0; i<1000000000000; i++) {
    record.nonce = i
    // record.nonce = Math.floor(Math.random()*100000000)
    let h = hash(JSON.stringify(record))
    if (h.startsWith('00000')) return { record: record, hash: h }
  }
}

console.log(mining(record))