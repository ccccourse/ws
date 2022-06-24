// import the connect function
// import { connect, NatsConnection } from "src/mod.ts";
import { connect, NatsConnection } from "https://raw.githubusercontent.com/nats-io/nats.deno/main/src/mod.ts"
// the connection is configured by a set of ConnectionOptions
// if none is set, the client will connect to 127.0.0.1:4222.
// common options that you could pass look like:
const localhostAtStandardPort = {};
const localPort = { port: 4222 };
const hostAtStdPort = { servers: "demo.nats.io" };
const hostPort = { servers: "demo.nats.io:4222" };

// let's try to connect to all the above, some may fail
const dials: Promise<NatsConnection>[] = [];
[localhostAtStandardPort, localPort, hostAtStdPort, hostPort].forEach((v) => {
  dials.push(connect(v));
});

const conns: NatsConnection[] = [];
// wait until all the dialed connections resolve or fail
// allSettled returns a tupple with `closed` and `value`:
await Promise.allSettled(dials)
  .then((a) => {
    // filter all the ones that succeeded
    const fulfilled = a.filter((v) => {
      return v.status === "fulfilled";
    });
    // and now extract all the connections
    //@ts-ignore
    const values = fulfilled.map((v) => v.value);
    conns.push(...values);
  });

// Print where we connected, and register a close handler
conns.forEach((nc) => {
  console.log(`connected to ${nc.getServer()}`);
  // you can get notified when the client exits by getting `closed()`.
  // closed resolves void or with an error if the connection
  // closed because of an error
  nc.closed()
    .then((err) => {
      let m = `connection to ${nc.getServer()} closed`;
      if (err) {
        m = `${m} with an error: ${err.message}`;
      }
      console.log(m);
    });
});

// now close all the connections, and wait for the close to finish
const closed = conns.map((nc) => nc.close());
await Promise.all(closed);
