# ElasticSearch on linode

* https://stackoverflow.com/questions/34748464/ubuntu-elasticsearch-error-cannot-allocate-memory

記憶體不夠，需要修改 /etc/elasticsearch/jvm.options

```
-Xms2g
-Xmx2g
```

改為

```
-Xms256m
-Xmx256m
```


* https://stackoverflow.com/questions/40766301/run-elastic-search-as-root-user

應該用 systemctl 去啟動 elasticsearch，而非直接啟動

```
root@localhost:/home/guest# sudo systemctl start elasticsearch
root@localhost:/home/guest# sudo systemctl status elasticsearch
```

## test


```
guest@localhost:~/ws/deno/14-elasticsearch/04-esfetch/0 
3-postEs$ deno run -A postEs.js
{
  _index: "blog",
  _type: "user",
  _id: "garfield",
  _version: 2,
  result: "updated",
  _shards: { total: 2, successful: 1, failed: 0 },      
  _seq_no: 1,
  _primary_term: 1
}
```


## 

```
guest@localhost:~/ws/deno/14-elasticsearch/05-essearch/02-search$ deno run -A seScript.js
post:http://localhost:9200/es3/page/1 obj= { id: 1, content: "陳鍾誠 ccckmit  50 歲 /程序員/教師/" }
{
  _index: "es3",
  _type: "page",
  _id: "1",
  _version: 1,
  result: "created",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 0,
  _primary_term: 1
}
post:http://localhost:9200/es3/page/2 obj= { id: 2, content: "史奴比 Snoopy   3 歲  /狗/很有智慧/" }
{
  _index: "es3",
  _type: "page",
  _id: "2",
  _version: 1,
  result: "created",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 1,
  _primary_term: 1
}
post:http://localhost:9200/es3/page/3 obj= { id: 3, content: "加菲貓 Garfield 7 歲  /貓/很懶惰/" }
{
  _index: "es3",
  _type: "page",
  _id: "3",
  _version: 1,
  result: "created",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 2,
  _primary_term: 1
}
post:http://localhost:9200/es3/page/4 obj= { id: 4, content: "李小明 smlee    20 歲 /程序員/工程師/" }
{
  _index: "es3",
  _type: "page",
  _id: "4",
  _version: 1,
  result: "created",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 3,
  _primary_term: 1
}
get:http://localhost:9200/es3/page/_search filter= undefined
{
  took: 1,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: { total: { value: 0, relation: "eq" }, max_score: null, hits: 
[] }
}
get:http://localhost:9200/es3/page/3 filter= undefined
{
  _index: "es3",
  _type: "page",
  _id: "3",
  _version: 1,
  _seq_no: 2,
  _primary_term: 1,
  found: true,
  _source: { id: 3, content: "加菲貓 Garfield 7 歲  /貓/很懶惰/" }    
}
get:http://localhost:9200/es3/page/_search filter= { id: 3 }
{
  took: 6,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: { total: { value: 0, relation: "eq" }, max_score: null, hits: 
[] }
}
get:http://localhost:9200/es3/page/_search filter= { content: "程序員" }
{
  took: 14,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },        
  hits: { total: { value: 0, relation: "eq" }, max_score: null, hits: 
[] }
}
get:http://localhost:9200/es3/page/_search filter= { content: "程序" }
{
  took: 2,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: { total: { value: 0, relation: "eq" }, max_score: null, hits: 
[] }
}
get:http://localhost:9200/es3/page/_search filter= { content: "程" }
{
  took: 1,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: { total: { value: 0, relation: "eq" }, max_score: null, hits: 
[] }
}
get:http://localhost:9200/es3/page/_search filter= { content: "貓" }  
{
  took: 1,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: { total: { value: 0, relation: "eq" }, max_score: null, hits: 
[] }
}
get:http://localhost:9200/es3/page/_search filter= { content: "snoopy" }
{
  took: 1,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },        
  hits: { total: { value: 0, relation: "eq" }, max_score: null, hits: 
[] }
}
```


## 

```
guest@localhost:~/ws/deno/14-elasticsearch/05-essearch/02-search$ deno run -A seScript.js
post:http://localhost:9200/es3/page/1 obj= { id: 1, content: "陳鍾誠 ccckmit  50 歲 /程序員/教師/" }
{
  _index: "es3",
  _type: "page",
  _id: "1",
  _version: 2,
  result: "updated",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 4,
  _primary_term: 1
}
post:http://localhost:9200/es3/page/2 obj= { id: 2, content: "史奴比 Snoopy   3 歲  /狗/很有智慧/" }
{
  _index: "es3",
  _type: "page",
  _id: "2",
  _version: 2,
  result: "updated",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 5,
  _primary_term: 1
}
post:http://localhost:9200/es3/page/3 obj= { id: 3, content: "加菲貓 Garfield 7 歲  /貓/很懶惰/" }
{
  _index: "es3",
  _type: "page",
  _id: "3",
  _version: 2,
  result: "updated",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 6,
  _primary_term: 1
}
post:http://localhost:9200/es3/page/4 obj= { id: 4, content: "李小明 smlee    20 歲 /程序員/工程師/" }
{
  _index: "es3",
  _type: "page",
  _id: "4",
  _version: 2,
  result: "updated",
  _shards: { total: 2, successful: 1, failed: 0 },
  _seq_no: 7,
  _primary_term: 1
}
get:http://localhost:9200/es3/page/_search filter= undefined
{
  took: 3,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: {
    total: { value: 4, relation: "eq" },
    max_score: 1,
    hits: [
      { _index: "es3", _type: "page", _id: "1", _score: 1, _source: [Object] },
      { _index: "es3", _type: "page", _id: "2", _score: 1, _source: [Object] },
      { _index: "es3", _type: "page", _id: "3", _score: 1, _source: [Object] },
      { _index: "es3", _type: "page", _id: "4", _score: 1, _source: [Object] }
    ]
  }
}
get:http://localhost:9200/es3/page/3 filter= undefined
{
  _index: "es3",
  _type: "page",
  _id: "3",
  _version: 2,
  _seq_no: 6,
  _primary_term: 1,
  found: true,
  _source: { id: 3, content: "加菲貓 Garfield 7 歲  /貓/很懶惰/" }
}
get:http://localhost:9200/es3/page/_search filter= { id: 3 }
{
  took: 4,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: {
    total: { value: 1, relation: "eq" },
    max_score: 1,
    hits: [ { _index: "es3", _type: "page", _id: "3", _score: 1, _source: [Object] } ]
  }
}
get:http://localhost:9200/es3/page/_search filter= { content: "程序員" }
{
  took: 19,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: {
    total: { value: 2, relation: "eq" },
    max_score: 2.265903,
    hits: [
      { _index: "es3", _type: "page", _id: "4", _score: 2.265903, _source: [Object] },
      { _index: "es3", _type: "page", _id: "1", _score: 2.0794413, _source: [Object] }
    ]
  }
}
get:http://localhost:9200/es3/page/_search filter= { content: "程序" }
{
  took: 4,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: {
    total: { value: 2, relation: "eq" },
    max_score: 1.5976098,
    hits: [
      { _index: "es3", _type: "page", _id: "4", _score: 1.5976098, _source: [Object] },
      { _index: "es3", _type: "page", _id: "1", _score: 1.3862942, _source: [Object] }
    ]
  }
}
get:http://localhost:9200/es3/page/_search filter= { content: "程" }
{
  took: 2,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: {
    total: { value: 2, relation: "eq" },
    max_score: 0.92931646,
    hits: [
      { _index: "es3", _type: "page", _id: "4", _score: 0.92931646, _source: [Object] },
      { _index: "es3", _type: "page", _id: "1", _score: 0.6931471, _source: [Object] }
    ]
  }
}
get:http://localhost:9200/es3/page/_search filter= { content: "貓" }
{
  took: 1,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: {
    total: { value: 1, relation: "eq" },
    max_score: 1.6989005,
    hits: [
      { _index: "es3", _type: "page", _id: "3", _score: 1.6989005, _source: [Object] }
    ]
  }
}
get:http://localhost:9200/es3/page/_search filter= { content: "snoopy" }
{
  took: 1,
  timed_out: false,
  _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
  hits: {
    total: { value: 1, relation: "eq" },
    max_score: 1.2039728,
    hits: [
      { _index: "es3", _type: "page", _id: "2", _score: 1.2039728, _source: [Object] }
    ]
  }
}
```
