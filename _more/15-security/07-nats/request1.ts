import { connect, StringCodec } from "https://raw.githubusercontent.com/nats-io/nats.deno/main/src/mod.ts";

// create a connection
const nc = await connect({ servers: "demo.nats.io:4222" });

// create an encoder
const sc = StringCodec();

// a client makes a request and receives a promise for a message
// by default the request times out after 1s (1000 millis) and has
// no payload.
await nc.request("time", sc.encode("hello!"), { timeout: 1000 })
  .then((m) => {
    console.log(`got response: ${sc.decode(m.data)}`);
  })
  .catch((err) => {
    console.log(`problem with request: ${err.message}`);
  });

await nc.close();