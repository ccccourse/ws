## 使用 curl 對 ElasticSearch server 進行命令操作

* [阮一峰:全文搜索引擎 Elasticsearch 入门教程](https://www.ruanyifeng.com/blog/2017/08/elasticsearch.html) (讚！)
* [阮一峰:curl 的用法指南](http://www.ruanyifeng.com/blog/2019/09/curl-reference.html)

## 首頁

```
user@DESKTOP-96FRN6B MSYS ~
$ curl localhost:9200
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

參考 -- https://developer.aliyun.com/article/366099

新增

```
$ curl -H 'Content-Type: application/json' -XPOST http://localhost:9200/zhouls/user/1 -d '{"name" : "john"  , "age" : 28}'
{"_index":"zhouls","_type":"user","_id":"1","_version":1,"result":"created","_shards":{"total":2,"successful":1,"failed":0},"_seq_no":0,"_primary_term":1}
```

查詢

```
$ curl http://localhost:9200/zhouls/user/1
{"_index":"zhouls","_type":"user","_id":"1","_version":1,"_seq_no":0,"_primary_term":1,"found":true,"_source":{"name" : "john"  , "age" : 28}}

```

新增

```
$ curl -H 'Content-Type: application/json' -X PUT 'localhost:9200/accounts/person/1' -d '
{
  "user": "张三",
  "title": "工程师",
  "desc": "数据库管理"
}'
{"_index":"accounts","_type":"person","_id":"1","_version":1,"result":"created","_shards":{"total":2,"successful":1,"failed":0},"_seq_no":0,"_primary_term":1}
```

查詢

```
$ curl http://localhost:9200/accounts/person/1                                  {"_index":"accounts","_type":"person","_id":"1","_version":1,"_seq_no":0,"_primary_term":1,"found":true,"_source":
{
  "user": "张三",
  "title": "工程师",
  "desc": "数据库管理"
}}


$ curl 'localhost:9200/accounts/person/1?pretty'
{
  "_index" : "accounts",
  "_type" : "person",
  "_id" : "1",
  "_version" : 1,
  "_seq_no" : 0,
  "_primary_term" : 1,
  "found" : true,
  "_source" : {
    "user" : "张三",
    "title" : "工程师",
    "desc" : "数据库管理"
  }
}

```

## 再次新增

```
$  curl -H 'Content-Type: application/json' -X PUT 'localhost:9200/accounts/person/2' -d '
{
  "user": "李四",
  "title": "工程师",
  "desc": "JavaScript程式設計師"
}'
{"_index":"accounts","_type":"person","_id":"2","_version":1,"result":"created","_shards":{"total":2,"successful":1,"failed":0},"_seq_no":2,"_primary_term":1}
user@DESKTOP-96FRN6B MSYS ~
$ curl 'localhost:9200/accounts/person/2'                                       {"_index":"accounts","_type":"person","_id":"2","_version":1,"_seq_no":2,"_primary_term":1,"found":true,"_source":
{
  "user": "李四",
  "title": "工程师",
  "desc": "JavaScript程式設計師"
}}
```

## 查詢全部

```
user@DESKTOP-96FRN6B MSYS ~
$ curl 'localhost:9200/accounts/person/_search'                                 {"took":42,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":2,"relation":"eq"},"max_score":1.0,"hits":[{"_index":"accounts","_type":"person","_id":"1","_score":1.0,"_source":
{
  "user": "张三",
  "title": "工程师",
  "desc": "数据库管理"
}},{"_index":"accounts","_type":"person","_id":"2","_score":1.0,"_source":
{
  "user": "李四",
  "title": "工程师",
  "desc": "JavaScript程式設計師"
}}]}}
```

## 條件查詢

```
$ curl -H 'Content-Type: application/json' -X GET 'localhost:9200/accounts/person/_search' -d '{
"query": {"match": {"desc":"JavaScript"}}}
'
{"took":6,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":1,"relation":"eq"},"max_score":0.6682933,"hits":[{"_index":"accounts","_type":"person","_id":"2","_score":0.6682933,"_source":
{
  "user": "李四",
  "title": "工程师",
  "desc": "JavaScript程式設計師"
}}]}}

```
