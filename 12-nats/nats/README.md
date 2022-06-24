
## nats1.ts

```
user@DESKTOP-96FRN6B MINGW64 /d/ccc109/ws/deno/egov/js/01-nats (master)
$ deno run -A --unstable nats1.ts
Check file:///D:/ccc109/ws/deno/egov/js/01-nats/nats1.ts
connected to demo.nats.io:4222
connected to demo.nats.io:4222
connection to demo.nats.io:4222 closed
connection to demo.nats.io:4222 closed
```

## pubsub1.ts

```
user@DESKTOP-96FRN6B MINGW64 /d/ccc109/ws/deno/egov/js/01-nats (master)
$ deno run -A --unstable pubsub1.ts
Check file:///D:/ccc109/ws/deno/egov/js/01-nats/pubsub1.ts
[1]: world
[2]: again
subscription closed
```

## stream1.ts

```
user@DESKTOP-96FRN6B MINGW64 /d/ccc109/ws/deno/egov/js/01-nats (master)
$ deno run -A --unstable stream1.ts stream.demo
Check file:///D:/ccc109/ws/deno/egov/js/01-nats/stream1.ts
enter the following command to get messages from the stream
deno run --allow-all --unstable examples/nats-sub.ts stream.demo
publishing #1
publishing #2
publishing #3

```

## wildcard1.ts

```
user@DESKTOP-96FRN6B MINGW64 /d/ccc109/ws/deno/egov/js/01-nats (master)
$ deno run -A --unstable wildcard1.ts
Check file:///D:/ccc109/ws/deno/egov/js/01-nats/wildcard1.ts
listening for help.*.system
listening for help.me.*
listening for help.>
```

## request1.ts

```
user@DESKTOP-96FRN6B MINGW64 /d/ccc109/ws/deno/egov/js/01-nats (master)
$ deno run -A --unstable request1.ts
Check file:///D:/ccc109/ws/deno/egov/js/01-nats/request1.ts
problem with request: TIMEOUT
```

## queuegroup1.ts

```
user@DESKTOP-96FRN6B MINGW64 /d/ccc109/ws/deno/egov/js/01-nats (master)
$ deno run -A --unstable queuegroup1.ts
Check file:///D:/ccc109/ws/deno/egov/js/01-nats/queuegroup1.ts
error: TS2339 [ERROR]: Property 'options' does not exist on type 'NatsConnection'.
    console.log(`${nc.options.name} is listening for 'echo' requests...`);
                      ~~~~~~~
    at file:///D:/ccc109/ws/deno/egov/js/01-nats/queuegroup1.ts:31:23
```

## nkey1.js

* https://deno.land/x/nkeys.js
    * A public-key signature system based on Ed25519 for the NATS ecosystem system for JavaScript.
    * https://nats.io/
    * document -- https://nats-io.github.io/nkeys.js/

```sh
user@DESKTOP-96FRN6B MINGW64 /d/ccc109/ws/deno/egov/js/02-nkey (master)
$ deno run -A --unstable nkey1.ts
Check file:///D:/ccc109/ws/deno/egov/js/02-nkey/nkey1.ts
seeds start with s: true
nkey is for a user? true
SUAALLSMFOJ7QE3GL4FLKAP6ZTYI2542JDUTWOMMVI3C3PFIX5Y7LMLTAY
data was verified by my key
data was verified by UAVAEUFP7WPSAIMPLUVC7ZZ6VX5AQ3CTKSJPYF2ESNHUAHYBZVLONKOC
```
