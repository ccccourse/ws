// 參考 -- https://deno.land/std@0.63.0/hash
import { createHash } from 'https://deno.land/std/hash/mod.ts';

function hash(text) {
  const h = createHash('sha256') // const hash = createHash('md5')
  h.update(text)
  return h.toString()
}

console.log('hash(hello)=', hash('hello'))
console.log('hash(hello!)=', hash('hello!'))
console.log('hash(hello world !)=', hash('hello world !'))
