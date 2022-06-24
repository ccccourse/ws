# wsl

```
sudo apt install nginx
```

```
wsl> sudo service nginx start
 * Starting nginx nginx                                                 [ OK ]
```

然後看 http://localhost/

```
wsl> ls /usr/share/nginx
html  modules  modules-available
wsl> ls /usr/share/nginx/html
index.html
```

## hello.html

```
wsl> sudo cp myweb/hello.html /usr/share/nginx/html/hello.html

```
 
然後就可以看到 http://localhost/hello.html 了

```
wsl> sudo service nginx stop
[sudo] password for ccckmit: 
 * Stopping nginx nginx                                 [ OK ]
```
