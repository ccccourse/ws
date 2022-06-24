import * as lib6 from 'https://deno.land/x/lib6/mod.ts'

let count = 0
while (true) {
  await lib6.sleep(1000)
  console.log(count++)
}
