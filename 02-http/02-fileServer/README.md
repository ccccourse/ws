# FileServer

## 安裝現成的

```
$ deno install --allow-net --allow-read https://deno.land/std/http/file_server.ts
```

記得將 C:\Users\user\.deno\bin 設到系統路徑：

## htmlServer.js

```
PS D:\ccc\ccc109\ws\deno\03-http\02-fileServer> deno run -A htmlServer.js
Check file:///D:/ccc/ccc109/ws/deno/03-http/02-fileServer/htmlServer.js
http://localhost:8000/
req.url= /index.html
req.url= /favicon.ico
error= NotFound: 系統找不到指定的檔案。 (os error 2)
    at Object.jsonOpAsync (core.js:236:13)
    at async open (deno:cli/rt/30_files.js:44:17)
    at async Object.readTextFile (deno:cli/rt/40_read_file.js:30:18)
    at async file:///D:/ccc/ccc109/ws/deno/03-http/02-fileServer/htmlServer.js:7:18
req.url= /hello.html
req.url= /favicon.ico
error= NotFound: 系統找不到指定的檔案。 (os error 2)
    at Object.jsonOpAsync (core.js:236:13)
    at async open (deno:cli/rt/30_files.js:44:17)
    at async Object.readTextFile (deno:cli/rt/40_read_file.js:30:18)
    at async file:///D:/ccc/ccc109/ws/deno/03-http/02-fileServer/htmlServer.js:7:18
```

## Mac 執行過程

Mac: http://blog.ctrlxctrlv.net/mac-environment-path/

```
sienqu-teacher:01-web csienqu$ deno install --allow-net --allow-read https://deno.land/std/http/file_server.ts
Download https://deno.land/std/http/file_server.ts
Warning Implicitly using latest version (0.69.0) for https://deno.land/std/http/file_server.ts
Download https://deno.land/std@0.69.0/http/file_server.ts
Download https://deno.land/std@0.69.0/path/mod.ts
Download https://deno.land/std@0.69.0/http/server.ts
Download https://deno.land/std@0.69.0/flags/mod.ts
Download https://deno.land/std@0.69.0/_util/assert.ts
Download https://deno.land/std@0.69.0/encoding/utf8.ts
Download https://deno.land/std@0.69.0/io/bufio.ts
Download https://deno.land/std@0.69.0/async/mod.ts
Download https://deno.land/std@0.69.0/http/_io.ts
Download https://deno.land/std@0.69.0/path/_constants.ts
Download https://deno.land/std@0.69.0/path/win32.ts
Download https://deno.land/std@0.69.0/path/posix.ts
Download https://deno.land/std@0.69.0/path/common.ts
Download https://deno.land/std@0.69.0/path/separator.ts
Download https://deno.land/std@0.69.0/path/_interface.ts
Download https://deno.land/std@0.69.0/path/glob.ts
Download https://deno.land/std@0.69.0/async/deferred.ts
Download https://deno.land/std@0.69.0/async/delay.ts
Download https://deno.land/std@0.69.0/async/mux_async_iterator.ts
Download https://deno.land/std@0.69.0/async/pool.ts
Download https://deno.land/std@0.69.0/bytes/mod.ts
Download https://deno.land/std@0.69.0/textproto/mod.ts
Download https://deno.land/std@0.69.0/http/http_status.ts
Download https://deno.land/std@0.69.0/path/_util.ts
Check https://deno.land/std@0.69.0/http/file_server.ts
✅ Successfully installed file_server
/Users/csienqu/.deno/bin/file_server
ℹ️  Add /Users/csienqu/.deno/bin to PATH
    export PATH="/Users/csienqu/.deno/bin:$PATH"
csienqu-teacher:01-web csienqu$ cd ..
csienqu-teacher:03-http csienqu$ file_server .
bash: file_server: command not found
csienqu-teacher:03-http csienqu$ vi ~/.bash_profile
csienqu-teacher:03-http csienqu$ vi ~/.bash_profile
csienqu-teacher:03-http csienqu$ source ~/.bash_profile
csienqu-teacher:03-http csienqu$ file_server .
Check https://deno.land/std@0.69.0/http/file_server.ts
HTTP server listening on http://0.0.0.0:4507/
```

## 然後啟動

```
PS D:\ccc\course\deno\02-typedScript\03-fileServer> file_server .
HTTP server listening on http://0.0.0.0:4507/
[2020-05-16 07:06:31] "GET / HTTP/1.1" 200
系統找不到指定的檔案。 (os error 2)
[2020-05-16 07:06:31] "GET /favicon.ico HTTP/1.1" 404
[2020-05-16 07:06:33] "GET /README.md HTTP/1.1" 200
```

接著看

http://127.0.0.1:4507/
