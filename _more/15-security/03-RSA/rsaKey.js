import RSA from "https://dev.jspm.io/node-rsa"

const key = new RSA({b: 2048}); // key.generateKeyPair(2048);
const privatePem = key.exportKey("pkcs8-private-pem")
const publicPem = key.exportKey("pkcs8-public-pem")
await Deno.writeTextFile("./private.pem", privatePem)
await Deno.writeTextFile("./public.pem", publicPem)
console.log(privatePem)
console.log(publicPem)
