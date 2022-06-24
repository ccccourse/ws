import { AES } from "https://deno.land/x/god_crypto/aes.ts";

const aes = new AES("Hello World AES!", {
  mode: "cbc",
  iv: "random 16byte iv",
});
const cipher = await aes.encrypt("This is AES-128-CBC. It works.");
console.log(cipher.hex());
// 41393374609eaee39fbe57c96b43a9da0d547c290501be50f983ecaac6c5fd1c

const plain = await aes.decrypt(cipher);
console.log(plain.toString());
// This is AES-128-CBC. It works.