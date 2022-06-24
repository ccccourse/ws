import { connect, StringCodec, Subscription } from "https://raw.githubusercontent.com/nats-io/nats.deno/main/src/mod.ts";
const nc = await connect({ servers: "demo.nats.io:4222" });
const sc = StringCodec();

// subscriptions can have wildcard subjects
// the '*' matches any string in the specified token position
const s1 = nc.subscribe("help.*.system");
const s2 = nc.subscribe("help.me.*");
// the '>' matches any tokens in that position or following
// '>' can only be specified at the end
const s3 = nc.subscribe("help.>");

async function printMsgs(s: Subscription) {
  let subj = s.getSubject();
  console.log(`listening for ${subj}`);
  const c = (13 - subj.length);
  const pad = "".padEnd(c);
  for await (const m of s) {
    console.log(
      `[${subj}]${pad} #${s.getProcessed()} - ${m.subject} ${
        m.data ? " " + sc.decode(m.data) : ""
      }`,
    );
  }
}

printMsgs(s1);
printMsgs(s2);
printMsgs(s3);

// don't exit until the client closes
await nc.closed();