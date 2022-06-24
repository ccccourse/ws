import * as lib6 from 'https://deno.land/x/lib6/mod.ts'

import { connect, StringCodec } from "https://deno.land/x/nats/src/mod.ts";

// to create a connection to a nats-server:
const nc = await connect({ servers: "demo.nats.io:4222" });

// create a codec
const sc = StringCodec();
// create a simple subscriber and iterate over messages
// matching the subscription
const sub = nc.subscribe("coin6_channel");

for await (const m of sub) {
  console.log(`sub:[${sub.getProcessed()}]: ${sc.decode(m.data)}`);
}

await nc.drain()
