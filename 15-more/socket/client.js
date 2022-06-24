const encoder = new TextEncoder();
const decoder = new TextDecoder();

const conn = await Deno.connect({ hostname: "127.0.0.1", port: 8080 })
// Write to the server
await conn.write(encoder.encode('ping'));
// Read response
const buf = new Uint8Array(1024);
await conn.read(buf);
console.log('Client - Response:', decoder.decode(buf))
conn.close();