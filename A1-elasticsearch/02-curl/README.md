## 使用 curl 對 ElasticSearch server 進行命令操作

* [阮一峰:全文搜索引擎 Elasticsearch 入门教程](https://www.ruanyifeng.com/blog/2017/08/elasticsearch.html) (讚！)
* [阮一峰:curl 的用法指南](http://www.ruanyifeng.com/blog/2019/09/curl-reference.html)

## 安裝 curl

* Windows: https://chocolatey.org/packages/curl
* Linux (Ubuntu): sudo apt install curl
* Mac : brew install curl

## 首頁

```
user@DESKTOP-96FRN6B MSYS ~
$ http://localhost:9200/
{
  "name" : "DESKTOP-96FRN6B",
  "cluster_name" : "elasticsearch",
  "cluster_uuid" : "eCpUML4uRsKle6jIzOZ64Q",
  "version" : {
    "number" : "7.9.2",
    "build_flavor" : "default",
    "build_type" : "zip",
    "build_hash" : "d34da0ea4a966c4e49417f2da2f244e3e97b4e6e",
    "build_date" : "2020-09-23T00:45:33.626720Z",
    "build_snapshot" : false,
    "lucene_version" : "8.6.2",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}

```

## 新增&查詢

```
$ curl -H 'Content-Type: application/json' -XPOST http://localhost:9200/blog/user/john -d '{"name" : "john"  , "age" : 28}'

{"_index":"blog","_type":"user","_id":"john","_version":1,"result":"created","_shards":{"total":2,"successful":1,"failed":0},"_seq_no":0,"_primary_term":1}

$ curl http://localhost:9200/blog/user/john

{"_index":"blog","_type":"user","_id":"john","_version":1,"_seq_no":0,"_primary_term":1,"found":true,"_source":{"name" : "john"  , "age" : 28}}

$ curl -H 'Content-Type: application/json' -XPOST http://localhost:9200/blog/user/ccc -d '{"name" : "ccc"  , "age" : 50}'

{"_index":"blog","_type":"user","_id":"ccc","_version":1,"result":"created","_shards":{"total":2,"successful":1,"failed":0},"_seq_no":1,"_primary_term":1}

$ curl http://localhost:9200/blog/user/ccc
{"_index":"blog","_type":"user","_id":"ccc","_version":1,"_seq_no":1,"_primary_term":1,"found":true,"_source":{"name" : "ccc"  , "age" : 50}}

$ curl -H 'Content-Type: application/json' -XPOST http://localhost:9200/blog/user/snoopy -d '{"name" : "snoopy"  , "age" : 3}'

{"_index":"blog","_type":"user","_id":"snoopy","_version":1,"result":"created","_shards":{"total":2,"successful":1,"failed":0},"_seq_no":2,"_primary_term":1}

$ curl http://localhost:9200/blog/user/snoopy
{"_index":"blog","_type":"user","_id":"snoopy","_version":1,"_seq_no":2,"_primary_term":1,"found":true,"_source":{"name" : "snoopy"  , "age" : 3}}
```

## 查詢全部

```
user@DESKTOP-96FRN6B MSYS ~
$ curl 'localhost:9200/blog/user/_search'

{"took":126,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":3,"relation":"eq"},"max_score":1.0,"hits":[{"_index":"blog","_type":"user","_id":"john","_score":1.0,"_source":{"name" : "john"  , "age" : 28}},{"_index":"blog","_type":"user","_id":"ccc","_score":1.0,"_source":{"name" : "ccc"  , "age" : 50}},{"_index":"blog","_type":"user","_id":"snoopy","_score":1.0,"_source":{"name" : "snoopy"  , "age" : 3}}]}}

user@DESKTOP-96FRN6B MSYS ~
$ curl 'localhost:9200/blog/user/_search?pretty'
{
  "took" : 49,
  "timed_out" : false,
  "_shards" : {
    "total" : 1,
    "successful" : 1,
    "skipped" : 0,
    "failed" : 0
  },
  "hits" : {
    "total" : {
      "value" : 3,
      "relation" : "eq"
    },
    "max_score" : 1.0,
    "hits" : [
      {
        "_index" : "blog",
        "_type" : "user",
        "_id" : "john",
        "_score" : 1.0,
        "_source" : {
          "name" : "john",
          "age" : 28
        }
      },
      {
        "_index" : "blog",
        "_type" : "user",
        "_id" : "ccc",
        "_score" : 1.0,
        "_source" : {
          "name" : "ccc",
          "age" : 50
        }
      },
      {
        "_index" : "blog",
        "_type" : "user",
        "_id" : "snoopy",
        "_score" : 1.0,
        "_source" : {
          "name" : "snoopy",
          "age" : 3
        }
      }
    ]
  }
}

```

## 條件查詢

```
$ curl -H 'Content-Type: application/json' -X GET 'localhost:9200/blog/user/_search' -d '{
"query":{"match":{"name":"ccc"}}
}'

{"took":41,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":1,"relation":"eq"},"max_score":0.9808291,"hits":[{"_index":"blog","_type":"user","_id":"ccc","_score":0.9808291,"_source":{"name" : "ccc"  , "age" : 50}}]}}

```


csienqu-teacher:02-curl csienqu$ curl -H 'Content-Type: application/json' -X GET 'localhost:9200/blog/user/_search' -d '{
"query":{"match":{"age":3}}
}'


{"took":1,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":1,"relation":"eq"},"max_score":1.0,"hits":[{"_index":"blog","_type":"user","_id":"snoopy","_score":1.0,"_source":{"name" : "snoopy"  , "age" : 3}}]}
