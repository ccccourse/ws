import { connect, JSONCodec } from "https://raw.githubusercontent.com/nats-io/nats.deno/main/src/mod.ts";

// to create a connection to a nats-server:
const nc = await connect({ servers: "demo.nats.io" });

// create a codec
const jc = JSONCodec();

console.info("enter the following command to get messages from the stream");
console.info(
  "deno run --allow-all --unstable examples/nats-sub.ts stream.demo",
);

const start = Date.now();
let sequence = 0;
setInterval(() => {
  sequence++;
  const uptime = Date.now() - start;
  console.info(`publishing #${sequence}`);
  nc.publish("stream.demo", jc.encode({ sequence, uptime }));
}, 1000);