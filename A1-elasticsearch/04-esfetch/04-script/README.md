# script1.js

```
PS D:\ccc\ccc109\ws\deno\14-elasticsearch\04-esfetch\04-script> deno run -A script1.js
get:http://localhost:9200/blog/user/ccc filter= undefined
{
  _index: "blog",
  _type: "user",
  _id: "ccc",
  _version: 8,
  _seq_no: 13,
  _primary_term: 2,
  found: true,
  _source: { name: "ccc", age: 57 }
}
get:http://localhost:9200/blog/user/_search filter= undefined
{
  took: 3,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: {
    total: { value: 4, relation: "eq" },
    max_score: 1,
    hits: [
      { _index: "blog", _type: "user", _id: "john", _score: 1, _source: [Object] },
      { _index: "blog", _type: "user", _id: "snoopy", _score: 1, _source: [Object] },
      { _index: "blog", _type: "user", _id: "garfield", _score: 1, _source: [Object] },
      { _index: "blog", _type: "user", _id: "ccc", _score: 1, _source: [Object] }
    ]
  }
}
get:http://localhost:9200/blog/user/_search filter= { name: "ccc" }
{
  took: 6,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: {
    total: { value: 2, relation: "eq" },
    max_score: 0.53899646,
    hits: [
      {
        _index: "blog",
        _type: "user",
        _id: "garfield",
        _score: 0.53899646,
        _source: [Object]
      },
      { _index: "blog", _type: "user", _id: "ccc", _score: 0.53899646, _source: [Object] }       
    ]
  }
}
post:http://localhost:9200/blog/user/ccc obj= { name: "ccc", age: 58 }
{
  _index: "blog",
  _type: "user",
  _id: "ccc",
  _version: 9,
  result: "updated",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 14,
  _primary_term: 2
}
```