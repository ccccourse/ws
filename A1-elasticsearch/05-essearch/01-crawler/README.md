# crawler

```
PS D:\ccc\ccc109\ws\deno\14-elasticsearch\04-esfetch\05-crawler> deno run -A crawler.js
https://example.com download
post:http://localhost:9200/web/page/0 obj= {
  url: "https://example.com",
  page: '<!doctype html>\n<html>\n<head>\n    <title>Example Domain</title>\n\n    <meta charset="utf-8" />\n    <m...'
}
{
  _index: "web",
  _type: "page",
  _id: "0",
  _version: 3,
  result: "updated",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 24,
  _primary_term: 1
}
https://jsonplaceholder.typicode.com/todos/1 download
post:http://localhost:9200/web/page/1 obj= {
  url: "https://jsonplaceholder.typicode.com/todos/1",
  page: '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}'
}
{
  _index: "web",
  _type: "page",
  _id: "1",
  _version: 3,
  result: "updated",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 25,
  _primary_term: 1
}
https://jsonplaceholder.typicode.com/todos/2 download
post:http://localhost:9200/web/page/2 obj= {
  url: "https://jsonplaceholder.typicode.com/todos/2",
  page: '{\n  "userId": 1,\n  "id": 2,\n  "title": "quis ut nam facilis et officia qui",\n  "completed": false\n}'
}
{
  _index: "web",
  _type: "page",
  _id: "2",
  _version: 3,
  result: "updated",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 26,
  _primary_term: 1
}
https://jsonplaceholder.typicode.com/todos/3 download
post:http://localhost:9200/web/page/3 obj= {
  url: "https://jsonplaceholder.typicode.com/todos/3",
  page: '{\n  "userId": 1,\n  "id": 3,\n  "title": "fugiat veniam minus",\n  "completed": false\n}'
}
{
  _index: "web",
  _type: "page",
  _id: "3",
  _version: 3,
  result: "updated",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 27,
  _primary_term: 1
}
https://jsonplaceholder.typicode.com/todos/4 download
post:http://localhost:9200/web/page/4 obj= {
  url: "https://jsonplaceholder.typicode.com/todos/4",
  page: '{\n  "userId": 1,\n  "id": 4,\n  "title": "et porro tempora",\n  "completed": true\n}'  
}
{
  _index: "web",
  _type: "page",
  _id: "4",
  _version: 3,
  result: "updated",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 28,
  _primary_term: 1
}
https://jsonplaceholder.typicode.com/todos/5 download
post:http://localhost:9200/web/page/5 obj= {
  url: "https://jsonplaceholder.typicode.com/todos/5",
  page: '{\n  "userId": 1,\n  "id": 5,\n  "title": "laboriosam mollitia et enim quasi adipisci quia provident il...'
}
{
  _index: "web",
  _type: "page",
  _id: "5",
  _version: 3,
  result: "updated",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 29,
  _primary_term: 1
}
https://jsonplaceholder.typicode.com/todos/6 download
post:http://localhost:9200/web/page/6 obj= {
  url: "https://jsonplaceholder.typicode.com/todos/6",
  page: '{\n  "userId": 1,\n  "id": 6,\n  "title": "qui ullam ratione quibusdam voluptatem quia omnis",\n  "compl...'
}
{
  _index: "web",
  _type: "page",
  _id: "6",
  _version: 3,
  result: "updated",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 30,
  _primary_term: 1
}
https://jsonplaceholder.typicode.com/todos/7 download
post:http://localhost:9200/web/page/7 obj= {
  url: "https://jsonplaceholder.typicode.com/todos/7",
  page: '{\n  "userId": 1,\n  "id": 7,\n  "title": "illo expedita consequatur quia in",\n  "completed": false\n}'
}
{
  _index: "web",
  _type: "page",
  _id: "7",
  _version: 3,
  result: "updated",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 31,
  _primary_term: 1
}
https://jsonplaceholder.typicode.com/todos/8 download
post:http://localhost:9200/web/page/8 obj= {
  url: "https://jsonplaceholder.typicode.com/todos/8",
  page: '{\n  "userId": 1,\n  "id": 8,\n  "title": "quo adipisci enim quam ut ab",\n  "completed": true\n}'
}
{
  _index: "web",
  _type: "page",
  _id: "8",
  _version: 3,
  result: "updated",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 32,
  _primary_term: 1
}
https://jsonplaceholder.typicode.com/todos/9 download
post:http://localhost:9200/web/page/9 obj= {
  url: "https://jsonplaceholder.typicode.com/todos/9",
  page: '{\n  "userId": 1,\n  "id": 9,\n  "title": "molestiae perspiciatis ipsa",\n  "completed": false\n}'
}
{
  _index: "web",
  _type: "page",
  _id: "9",
  _version: 3,
  result: "updated",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 33,
  _primary_term: 1
}
https://jsonplaceholder.typicode.com/todos/10 download
post:http://localhost:9200/web/page/10 obj= {
  url: "https://jsonplaceholder.typicode.com/todos/10",
  page: '{\n  "userId": 1,\n  "id": 10,\n  "title": "illo est ratione doloremque quia maiores aut",\n  "completed...'
}
{
  _index: "web",
  _type: "page",
  _id: "10",
  _version: 3,
  result: "updated",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 34,
  _primary_term: 1
}
https://jsonplaceholder.typicode.com/todos/11 download
post:http://localhost:9200/web/page/11 obj= {
  url: "https://jsonplaceholder.typicode.com/todos/11",
  page: '{\n  "userId": 1,\n  "id": 11,\n  "title": "vero rerum temporibus dolor",\n  "completed": true\n}'
}
{
  _index: "web",
  _type: "page",
  _id: "11",
  _version: 3,
  result: "updated",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 35,
  _primary_term: 1
}
get:http://localhost:9200/web/page/_search filter= undefined
{
  took: 1142,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: {
    total: { value: 12, relation: "eq" },
    max_score: 1,
    hits: [
      { _index: "web", _type: "page", _id: "0", _score: 1, _source: [Object] },
      { _index: "web", _type: "page", _id: "1", _score: 1, _source: [Object] },
      { _index: "web", _type: "page", _id: "2", _score: 1, _source: [Object] },
      { _index: "web", _type: "page", _id: "3", _score: 1, _source: [Object] },
      { _index: "web", _type: "page", _id: "4", _score: 1, _source: [Object] },
      { _index: "web", _type: "page", _id: "5", _score: 1, _source: [Object] },
      { _index: "web", _type: "page", _id: "6", _score: 1, _source: [Object] },
      { _index: "web", _type: "page", _id: "7", _score: 1, _source: [Object] },
      { _index: "web", _type: "page", _id: "8", _score: 1, _source: [Object] },
      { _index: "web", _type: "page", _id: "9", _score: 1, _source: [Object] }
    ]
  }
}
get:http://localhost:9200/web/page/2 filter= undefined
{
  _index: "web",
  _type: "page",
  _id: "2",
  _version: 3,
  _seq_no: 26,
  _primary_term: 1,
  found: true,
  _source: {
    url: "https://jsonplaceholder.typicode.com/todos/2",
    page: '{\n  "userId": 1,\n  "id": 2,\n  "title": "quis ut nam facilis et officia qui",\n  "completed": false\n}'
  }
}
```
