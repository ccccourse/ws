# socket

* https://stackoverflow.com/questions/61840308/how-to-write-a-tcp-chat-server-with-deno

## server

```
den(base) $ deno run -A server.js
listening on 0.0.0.0:8080
Server - received: ping
Server - received: ping
```

## client

```
(base) $ deno run -A client.js
Client - Response: pong
(base) $ deno run -A client.js
Client - Response: pong
```
