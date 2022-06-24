# ElasticSearch 安裝

* [Elasticsearch: 权威指南](https://www.elastic.co/guide/cn/elasticsearch/guide/current/getting-started.html)
    * [安装并运行 Elasticsearch](https://www.elastic.co/guide/cn/elasticsearch/guide/current/running-elasticsearch.html)
    
## 安裝方法

1. JDK 最好更新到 11 版以上
2. 從 https://www.elastic.co/start 下載 elasticsearch
    * 由於我安裝時發現搭配中文分詞的 elasticsearch-analysis-ik 只支援到 7.9.2，所以改安裝下列版本
    * https://www.elastic.co/downloads/past-releases/elasticsearch-7-9-2
3. 解開壓縮檔後，直接到 bin/ 下啟動

```
PS D:\install\elasticsearch-7.9.3\bin> ./elasticsearch
[2020-10-31T09:09:31,648][INFO ][o.e.n.Node               ] [DESKTOP-96FRN6B] version[7.9.3], pid[2904], build[default/zip/c4138e51121ef06a6404866cddc601906fe5c868/2020-10-16T10:36:16.141335Z], OS[Windows 10/10.0/amd64], JVM[Oracle Corporation/Java HotSpot(TM) 64-Bit Server VM/15.0.1/15.0.1+9-18]
...
```

## 檢視安裝是否成功

到下列網址

* http://localhost:9200/

會看到

```
{
  "name" : "DESKTOP-96FRN6B",
  "cluster_name" : "elasticsearch",
  "cluster_uuid" : "TAos4_GKR-KSPb7M0LjTcw",
  "version" : {
    "number" : "7.9.3",
    "build_flavor" : "default",
    "build_type" : "zip",
    "build_hash" : "c4138e51121ef06a6404866cddc601906fe5c868",
    "build_date" : "2020-10-16T10:36:16.141335Z",
    "build_snapshot" : false,
    "lucene_version" : "8.6.2",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}
```

