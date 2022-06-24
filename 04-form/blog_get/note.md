  <form action="/search" method="get">
    <p><input type="text" name="q"></p>
    <p><input type="submit" value="Create"></p>
  </form>

GET /search?q=deno HTTP/1.0
Accept: image/gif, image/jpeg, application/msword, */*
Accept-Language: zh-tw
User-Agent: Mozilla/4.0
Content-Length: 
Host: ccc.kmit.edu.tw
Cache-Control: max-age=259200
Connection: keep-alive

===============================
POST /search HTTP/1.0
Accept: image/gif, image/jpeg, application/msword, */*
Accept-Language: zh-tw
User-Agent: Mozilla/4.0
Content-Length: 
Host: ccc.kmit.edu.tw
Cache-Control: max-age=259200
Connection: keep-alive

q=deno

===============================
http://google.com/search?q=deno

http://google.com/search
