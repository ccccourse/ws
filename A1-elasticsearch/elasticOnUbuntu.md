# Elasticsearch on Ubuntu

## linode

* https://www.elastic.co/guide/en/elasticsearch/reference/current/starting-elasticsearch.html

```
sudo systemctl start elasticsearch.service
sudo systemctl stop elasticsearch.service
```

## elasticsearch on ubuntu

* https://www.elastic.co/guide/en/elasticsearch/reference/current/starting-elasticsearch.html

```
sudo -i service elasticsearch start
sudo -i service elasticsearch stop
```

方法二

```
sudo systemctl start elasticsearch.service
sudo systemctl stop elasticsearch.service
```

## 調整記憶體


```
root@localhost:/home/guest# ls /etc/elasticsearch
elasticsearch.keystore  elasticsearch.yml  jvm.options  jvm.options.d  log4j2.properties  role_mapping.yml  roles.yml  users  users_roles
```

修改 jvm.options 

```
################################################################

# Xms represents the initial size of total heap space
# Xmx represents the maximum size of total heap space

-Xms128m
-Xmx128m
```
