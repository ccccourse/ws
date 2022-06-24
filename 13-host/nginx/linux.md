# Linux -- Nginx

在 Linux (ubuntu) 上，用 apt 安裝好之後， nginx 就會處於啟動狀態。

```
$ sudo apt install nginx
```

## conf

ubuntu 的 nginx.conf 在 /etc/nginx 中。

```
root@localhost:/var/www/tutorial# ls /etc/nginx
conf.d          modules-available  sites-enabled
fastcgi.conf    modules-enabled    snippets
fastcgi_params  nginx.conf         uwsgi_params
koi-utf         proxy_params       win-utf
koi-win         scgi_params
mime.types      sites-available
```

nginx.conf 的預設內容

```
root@localhost:/var/www/tutorial# cat /etc/nginx/nginx.conf
user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
        worker_connections 768;
        # multi_accept on;
}

http {

        ##
        # Basic Settings
        ##

        sendfile on;
        tcp_nopush on;
        tcp_nodelay on;
        keepalive_timeout 65;
        types_hash_max_size 2048;
        # server_tokens off;

        # server_names_hash_bucket_size 64;
        # server_name_in_redirect off;

        include /etc/nginx/mime.types;
        default_type application/octet-stream;

        ##
        # SSL Settings
        ##

        ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE
        ssl_prefer_server_ciphers on;

        ##
        # Logging Settings
        ##

        access_log /var/log/nginx/access.log;
        error_log /var/log/nginx/error.log;

        ##
        # Gzip Settings
        ##

        gzip on;

        # gzip_vary on;
        # gzip_proxied any;
        # gzip_comp_level 6;
        # gzip_buffers 16 8k;
        # gzip_http_version 1.1;
        # gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

        ##
        # Virtual Host Configs
        ##

        include /etc/nginx/conf.d/*.conf;
        include /etc/nginx/sites-enabled/*;
}


#mail {
#       # See sample authentication script at:
#       # http://wiki.nginx.org/ImapAuthenticateWithApachePhpScript
#
#       # auth_http localhost/auth.php;
#       # pop3_capabilities "TOP" "USER";
#       # imap_capabilities "IMAP4rev1" "UIDPLUS";
#
#       server {
#               listen     localhost:110;
#               protocol   pop3;
#               proxy      on;
#       }
# 
#       server {
#               listen     localhost:143;
#               protocol   imap;
#               proxy      on;
#       }
#}
```


查看 PID

```
root@localhost:/var/www/tutorial# ps -ax | grep nginx
24635 ?        Ss     0:00 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
24638 ?        S      0:00 nginx: worker process
24764 pts/4    S+     0:00 grep --color=auto nginx
```

# nginx

* https://ubuntu.com/tutorials/install-and-configure-nginx

```
$ sudo apt update
$ sudo apt install nginx
```

然後可以看到 http://programmermedia.org/ 顯示

Welcome to nginx!
If you see this page, the nginx web server is successfully installed and working. Further configuration is required.

For online documentation and support please refer to nginx.org.
Commercial support is available at nginx.com.

Thank you for using nginx.

## 加入新 port 站

```
root@localhost:/var/www/tutorial# cd /var/www
root@localhost:/var/www/tutorial# sudo mkdir tutorial
root@localhost:/var/www/tutorial# cd tutorial

root@localhost:/var/www/tutorial# cat index.html
<!doctype html>
<html>
        <head>
                    <meta charset="utf-8">
                        <title>Hello, Nginx!</title>
        </head>
        <body>
                    <h1>Hello, Nginx!</h1>
                        <p>We have just configured our Nginx web server on Ubuntu Server!</p>
        </body>
</html>

root@localhost:/var/www/tutorial# vim index.html
```

## 新增 reverse proxy

```
root@localhost:/var/www/tutorial# cd /etc/nginx/sites-enabled
root@localhost:/etc/nginx/sites-enabled# ls
default
root@localhost:/etc/nginx/sites-enabled# vim tutorial

root@localhost:/etc/nginx/sites-enabled# cat tutorial
server {
       listen 81;
       listen [::]:81;

       server_name example.ubuntu.com;

       root /var/www/tutorial;
       index index.html;

       location / {
               try_files $uri $uri/ =404;
       }
}

root@localhost:/etc/nginx/sites-enabled# sudo service nginx restart
```

然後就可以在 http://programmermedia.org:81/ 看到 

## 進階閱讀

* http://nginx.org/en/docs/beginners_guide.html
* https://www.nginx.com/resources/library/complete-nginx-cookbook/