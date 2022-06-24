# nats

先安裝 nats-server

windows

```
$ choco install nats-server
```

mac

```
$ brew install nats-server
```

## 然後啟動 server 

```
$ nats-server
```

## 接著就可以跑範例程式了

```
(base) $ deno run -A --unstable nats1.ts
connected to 127.0.0.1:4222
connected to localhost:4222
connected to 127.0.0.1:4222
connected to demo.nats.io:4443
connected to demo.nats.io:4222
(base) $ deno run -A --unstable pubsub1.ts
Check file:///Users/csienqu/Desktop/ccc/ws/12-nats/my2/pubsub1.ts
[1]: world
[2]: again
subscription closed
```
