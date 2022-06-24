import { get, post } from '../esearch.js'

let r = await get('/blog/user/ccc')
let ccc = r._source
await get('/blog/user/_search')
await get('/blog/user/_search', {name:"ccc"})
ccc.age++
await post('/blog/user/ccc', ccc)
