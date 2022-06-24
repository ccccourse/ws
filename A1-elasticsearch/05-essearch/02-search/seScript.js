import { get, post } from '../esearch.js'

const pages = [
  {id:1, content:"陳鍾誠 ccckmit  50 歲 /程序員/教師/"},
  {id:2, content:"史奴比 Snoopy   3 歲  /狗/很有智慧/"},
  {id:3, content:"加菲貓 Garfield 7 歲  /貓/很懶惰/"},
  {id:4, content:"李小明 smlee    20 歲 /程序員/工程師/"},
]

for (let page of pages) {
  let r = await post(`/es3/page/${page.id}`, page)
}

await get('/es3/page/_search')
await get('/es3/page/3')
await get('/es3/page/_search', {id:3})
await get('/es3/page/_search', {content:'程序員'})
await get('/es3/page/_search', {content:'程序'})
await get('/es3/page/_search', {content:'程'})
await get('/es3/page/_search', {content:'貓'})
await get('/es3/page/_search', {content:'snoopy'})
