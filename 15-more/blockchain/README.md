# sha256

* 區塊鏈的原理
    * https://github.com/anders94/blockchain-demo
    * https://andersbrownworth.com/blockchain/


## hash.js

```
PS D:\ccc\ccc109a\se\deno\alg\07-hashing\sha> deno run hash.js
Check file:///D:/ccc/ccc109a/se/deno/alg/07-hashing_todo/sha/hash.js
hash(hello)= 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
hash(hello!)= ce06092fb948d9ffac7d1a376e404b26b7575bcc11ee05a4615fef4fec3a308b
hash(hello world !)= a4bf1f6be616bf6a0de2ff6264de43a64bb768d38c783ec2bc74b5d4dcf5f889
```

## digest.js

```
PS D:\ccc\ccc109a\se\deno\alg\07-hashing\sha> deno run digest.js
Check file:///D:/ccc/ccc109a/se/deno/alg/07-hashing_todo/sha/digest.js
json= {
  "nonce": 0,
  "data": "john => mary $2.7"
}
digest= cde91f9fdaf2ad6d01d07bb2836f3f6640556232660faa3731c47ebf86683cb8
```

## mining.js

```
PS D:\ccc\ccc109a\se\deno\alg\08-bruteForce\bitcoin> deno run mining.js
Check file:///D:/ccc/ccc109a/se/deno/alg/08-bruteForce/bitcoin/mining.js
{
  record: { nonce: 169321, data: "john => mary : $2.7; george => john : $1.3" },
  hash: "000008fe6609d98812d5371c271640c2c3e9658f425d0cb4bc1eb5d7b1f653d1"
}
```

改為 random 版之後

```
PS D:\ccc\ccc109a\se\deno\alg\08-bruteForce\bitcoin> deno run mining.js
Check file:///D:/ccc/ccc109a/se/deno/alg/08-bruteForce/bitcoin/mining.js
{
  record: { nonce: 93863701, data: "john => mary : $2.7; george => john : $1.3" },
  hash: "0000078de98ba0f730a73a729ea6d8f7fbea2afa5d1dc708fd3821099cbd374e"
}
```
