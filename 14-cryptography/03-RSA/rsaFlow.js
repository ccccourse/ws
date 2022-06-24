// const NodeRSA = require('node-rsa');
import RSA from "https://dev.jspm.io/node-rsa"

// const key = new RSA({b: 2048});
const keyPem = await Deno.readTextFile("./private.pem")
const key = new RSA(keyPem);
const plaintext = 'pay John => Mary $100';
console.log('plaintext: ', plaintext);
const encrypted = key.encrypt(plaintext, 'base64');
console.log('encrypted: ', encrypted);
const decrypted = key.decrypt(encrypted, 'utf8');
console.log('decrypted: ', decrypted);

const signature = key.sign(plaintext)

const pubPem = await Deno.readTextFile("./public.pem")
const pubKey = new RSA(pubPem);

console.log('signature=', signature)

// const isVerified = key.verify(plaintext, signature)
const isVerified = pubKey.verify(plaintext, signature)
console.log('isVerified=', isVerified)


const isVerified2 = pubKey.verify(plaintext+'a', signature)
console.log('isVerified2=', isVerified2)

signature[0] = signature[0]+1
const isVerified3 = pubKey.verify(plaintext, signature)
console.log('isVerified3=', isVerified3)
