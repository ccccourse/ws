# 中文檢索

ccc: 經測試發現似乎 Elastic Search 內建的分詞就支援了中文，所以應該不需要下列的 ik 插件了。

請安裝 ik 分詞插件

* https://github.com/medcl/elasticsearch-analysis-ik/

## 7.9.2 安裝成功

```
PS D:\install\elasticsearch-7.9.2\bin> ./elasticsearch-plugin install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.9.2/elasticsearch-analysis-ik-7.9.2.zip
-> Installing https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.9.2/elasticsearch-analysis-ik-7.9.2.zip
-> Downloading https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.9.2/elasticsearch-analysis-ik-7.9.2.zip
[=================================================] 100%??
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@     WARNING: plugin requires additional permissions     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
* java.net.SocketPermission * connect,resolve
See http://docs.oracle.com/javase/8/docs/technotes/guides/security/permissions.html
for descriptions of what these permissions allow and the associated risks.

Continue with installation? [y/N]y
-> Installed analysis-ik
```

## 開始使用 ik

參考 -- https://github.com/medcl/elasticsearch-analysis-ik

```
$ curl -XPUT http://localhost:9200/index
{"acknowledged":true,"shards_acknowledged":true,"index":"index"}
user@DESKTOP-96FRN6B MSYS ~
$ curl -XPOST http://localhost:9200/index/_mapping -H 'Content-Type:application/json' -d'
{
        "properties": {
            "content": {
                "type": "text",
                "analyzer": "ik_max_word",
                "search_analyzer": "ik_smart"
            }
        }

}'
{"acknowledged":true}
user@DESKTOP-96FRN6B MSYS ~
$ curl -XPOST http://localhost:9200/index/_create/1 -H 'Content-Type:application/json' -d'
> {"content":"美国留给伊拉克的是个烂摊子吗"}
> '
{"_index":"index","_type":"_doc","_id":"1","_version":1,"result":"created","_shards":{"total":2,"successful":1,"failed":0},"_seq_no":0,"_primary_term":1}
user@DESKTOP-96FRN6B MSYS ~
$ curl -XPOST http://localhost:9200/index/_create/2 -H 'Content-Type:application/json' -d'
> {"content":"公安部：各地校车将享最高路权"}
> '
{"_index":"index","_type":"_doc","_id":"2","_version":1,"result":"created","_shards":{"total":2,"successful":1,"failed":0},"_seq_no":1,"_primary_term":1}
user@DESKTOP-96FRN6B MSYS ~
$ curl -XPOST http://localhost:9200/index/_create/3 -H 'Content-Type:application/json' -d'
> {"content":"中韩渔警冲突调查：韩警平均每天扣1艘中国渔船"}
> '
{"_index":"index","_type":"_doc","_id":"3","_version":1,"result":"created","_shards":{"total":2,"successful":1,"failed":0},"_seq_no":2,"_primary_term":1}
user@DESKTOP-96FRN6B MSYS ~
$ curl -XPOST http://localhost:9200/index/_create/4 -H 'Content-Type:application/json' -d'
> {"content":"中国驻洛杉矶领事馆遭亚裔男子枪击 嫌犯已自首"}
> '
{"_index":"index","_type":"_doc","_id":"4","_version":1,"result":"created","_shards":{"total":2,"successful":1,"failed":0},"_seq_no":3,"_primary_term":1}
user@DESKTOP-96FRN6B MSYS ~
$ curl -XPOST http://localhost:9200/index/_search  -H 'Content-Type:application/json' -d'
> {
>     "query" : { "match" : { "content" : "中国" }},
>     "highlight" : {
>         "pre_tags" : ["<tag1>", "<tag2>"],
>         "post_tags" : ["</tag1>", "</tag2>"],
>         "fields" : {
>             "content" : {}
>         }
>     }
> }
> '
{"took":1614,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":2,"relation":"eq"},"max_score":0.642793,"hits":[{"_index":"index","_type":"_doc","_id":"3","_score":0.642793,"_source":
{"content":"中韩渔警冲突调查：韩警平均每天扣1艘中国渔船"}
,"highlight":{"content":["中韩渔警冲突调查：韩警平均每天扣1艘<tag1>中国</tag1>渔船"]}},{"_index":"index","_type":"_doc","_id":"4","_score":0.642793,"_source":
{"content":"中国驻洛杉矶领事馆遭亚裔男子枪击 嫌犯已自首"}
,"highlight":{"content":["<tag1>中国</tag1>驻洛杉矶领事馆遭亚裔男子枪击 嫌犯已自首"]}}]}}

```


## 7.9.3 安裝失敗

```
PS D:\install\elasticsearch-7.9.3\bin> ./elasticsearch-plugin install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.9.2/elasticsearch-analysis-ik-7.9.2.zip
-> Installing https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.9.2/elasticsearch-analysis-ik-7.9.2.zip
-> Downloading https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.9.2/elasticsearch-analysis-ik-7.9.2.zip
[=================================================] 100%?? 
-> Failed installing https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.9.2/elasticsearch-analysis-ik-7.9.2.zip      
-> Rolling back https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.9.2/elasticsearch-analysis-ik-7.9.2.zip
-> Rolled back https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.9.2/elasticsearch-analysis-ik-7.9.2.zip
Exception in thread "main" java.lang.IllegalArgumentException: Plugin [analysis-ik] was built for Elasticsearch version 7.9.2 but version 
7.9.3 is running
        at org.elasticsearch.plugins.PluginsService.verifyCompatibility(PluginsService.java:349)
        at org.elasticsearch.plugins.InstallPluginCommand.loadPluginInfo(InstallPluginCommand.java:811)
        at org.elasticsearch.plugins.InstallPluginCommand.installPlugin(InstallPluginCommand.java:866)
        at org.elasticsearch.plugins.InstallPluginCommand.execute(InstallPluginCommand.java:254)
        at org.elasticsearch.plugins.InstallPluginCommand.execute(InstallPluginCommand.java:224)
        at org.elasticsearch.cli.EnvironmentAwareCommand.execute(EnvironmentAwareCommand.java:86)
        at org.elasticsearch.cli.Command.mainWithoutErrorHandling(Command.java:127)
        at org.elasticsearch.cli.MultiCommand.execute(MultiCommand.java:91)
        at org.elasticsearch.cli.Command.mainWithoutErrorHandling(Command.java:127)
        at org.elasticsearch.cli.Command.main(Command.java:90)       
        at org.elasticsearch.plugins.PluginCli.main(PluginCli.java:47)
```

## 改下載 ElasticSearch 7.9.2

* https://www.elastic.co/downloads/past-releases/elasticsearch-7-9-2
