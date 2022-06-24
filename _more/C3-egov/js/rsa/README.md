# RSA

* https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto
    * https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/generateKey
    * https://github.com/mdn/dom-examples/blob/master/web-crypto/encrypt-decrypt/rsa-oaep.js



* https://github.com/invisal/god_crypto

A pure Javascript/Typescript cryptography implementation for Deno. We will try to use WebCrypto if available, then fallback pure Javascript implementation.

* https://deno.land/x/secp256k1@1.0.5

## Node.js

```
const crypto = require('crypto');

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
});
```