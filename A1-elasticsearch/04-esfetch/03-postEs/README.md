# postEs.js

```
PS D:\ccc\ccc109\ws\deno\14-elasticsearch\04-esfetch\03-postEs> deno run -A postEs.js
{
  _index: "blog",
  _type: "user",
  _id: "garfield",
  _version: 1,
  result: "created",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 3,
  _primary_term: 2
}


PS D:\ccc\ccc109\ws\deno\14-elasticsearch\04-esfetch\03-postEs> deno run -A postEs.js
{
  _index: "blog",
  _type: "user",
  _id: "garfield",
  _version: 2,
  result: "updated",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 4,
  _primary_term: 2
}
```
