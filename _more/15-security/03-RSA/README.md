# RSA

參考： https://en.wikipedia.org/wiki/RSA_(cryptosystem)


* 套件 -- https://www.npmjs.com/package/node-rsa (好)

## genKey.js

```
user@DESKTOP-96FRN6B MINGW64 /d/ccc109/ws/deno/12-security/03-RSA (master)
$ deno run -A genKey.js
Check file:///D:/ccc109/ws/deno/12-security/03-RSA/genKey.js
privateKey= Uint8Array(32) [
  168, 197, 177, 197,  96,  30,  34, 251,
  203,  30,  66,  22, 152,  56, 232, 240,
   89,   6, 151,  27, 202,  11,   8, 235,
  126, 205, 182,  76,  26, 184, 151, 214
]
publicKey= Uint8Array(32) [
  168, 197, 177, 197,  96,  30,  34, 251,
  203,  30,  66,  22, 152,  56, 232, 240,
   89,   6, 151,  27, 202,  11,   8, 235,
  126, 205, 182,  76,  26, 184, 151, 214
]
msgHash= deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef
signature= cd3476746ac41d761f8bedea2f3c20c2b356a65d7e2396d4de5ee4cbb38c47b935bbd72618c1427b30665e0f65579721865e9064ec44c985a0cadea0d5a3950a
isSigned= true
```

## rsaKey.js

```
user@DESKTOP-96FRN6B MINGW64 /d/ccc109/ws/deno/12-security/03-RSA (master)
$ deno run -A rsaKey.js
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDojA35N2Reg/JC
ZA5ZSD0KvWzK7uuSgc9dNAQQWYrYVozsiFIzJme6ja+X7NZUhuBzWa9SRDHhE6Jv
WFK3mKhXC6qblWiqyVHUhuy6R7KlcuFRIy/A1gHknsw+nOD1Ekfng3h/cHW2QqRD
PVhSbkoNMmVjnsPYB6fdhx+HYIJuZ7Qo1RAv+1JmBQuulNA8+OjKltBj6f1xXx6z
AJHqfAZkWHVPPOdq6qW/iJPLwiMWXTpwPHveFoDy/sx7Qlh45fcTWKBtTAPkn8jm
QEACWjnGvhaRTG6ph0t4k+kcuspinA0IxFMXqq+/orRJIadmiB0YgEHPDvxoAEKt
jhgIAj+hAgMBAAECggEAOqWXoJJnra55GmVBeSLOwjajiUpX/sreERNdMwJiEc1C
HSUEFgJJhrLU5evE4exiDrU/ke/A5JKfFJWhxsupKMq4bCRyESBUktS0PwZ192PR
jzTghjFyqMWjnObTlPrXR3vQl9M03JJR+uMtsxw9cLaU+1q+6WyE2UmKmgms20qw
/8CnGdGMHBkaTVy6Jj6kV4m2eQ9akKhT54k5YfQfOU17HAsNALJooJGi97AM0uaS
wiEefceHt3Elv87+Tlr7vuPYTgH7dyXUOMXDxXBBq5TIgQLB7JprFhY8VEDzEpHt
yjb7tmlR+2sz/aXm3vcqObyBb+SHJWZmAjXAKB+bQQKBgQD3u7GFVmPdYqnmYilp
5aecYdkA90P6gn723xUyma0jz8TVnl7i83aSnKUncPH5XiAvikqzW+pbkrxPWEQ2
FAWBIikzxK8S05YkTpQk+/QLWqync4M1Cm6kkWEW1ZNLdzwyIbjdnzoVPpcYuYH6
/rHy3zJxP/6Sm4VcvJeR5sHCgwKBgQDwTqGT23C0ffJ3Ojg7a/+Z4bVqRSeQ71OR
5c6cWsJ5yqciJT+E53pfqsiajZHjycf7pXNibEVWtV+HCOXgg7XtPUXdY48qLAe7
aesbGWtGhnwul8ms3lj3b/nI8jGLAhi5gZyXNu/andYWV/VZjsZo6KhYLFavh98W
4GyyxVBMCwKBgFVTu7BOcjU1n4lvtA36gQG3HhRcFnj5a5vCeL2l+uHD1WsykkIf
U27qL2RnXaDjj7hwLIyckxsZbmzx3QS3XrH8vy5Kh3a3lBZLTnFyqrsibyd5/O5O
+o8KV+OSippKplwqC0+iYVIh7c8hTijSgx5BTFF/lkKO+J9ZgedKEODbAoGAbElC
jjooQ20twYQ+qqgz+ce31DdtaOYvpmMEA3jygadMQRq/0MfuYQW4d8yrnRXkRAV+
RS+83yHD9jmQPOedJ1ahEO44KSzGHzHPe9qseI9JjkVf38IiHP4cdOyOXrGHKrC5
O3rKAp11R4RDTyQDTGrq0TDJrzdu1AQ1dylq0ZkCgYEAlxWOXw/LZSa5w/eGDa0M
URoWSWy1GH+b/5WQFhVWSOV54K5iKRYhP8fMuiFScdsRfJEq6q2wIZfgTjUtC3QN
l2v5RQMfXMSgExnl46z0GawJ8/vQv+XXzLEb40OaBfl/jtM/0W1BbTDXpW2y6CP1
3ikz9gKbdA9sY5ZEsPDteg0=
-----END PRIVATE KEY-----
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA6IwN+TdkXoPyQmQOWUg9
Cr1syu7rkoHPXTQEEFmK2FaM7IhSMyZnuo2vl+zWVIbgc1mvUkQx4ROib1hSt5io
Vwuqm5VoqslR1IbsukeypXLhUSMvwNYB5J7MPpzg9RJH54N4f3B1tkKkQz1YUm5K
DTJlY57D2Aen3Ycfh2CCbme0KNUQL/tSZgULrpTQPPjoypbQY+n9cV8eswCR6nwG
ZFh1Tzznauqlv4iTy8IjFl06cDx73haA8v7Me0JYeOX3E1igbUwD5J/I5kBAAlo5
xr4WkUxuqYdLeJPpHLrKYpwNCMRTF6qvv6K0SSGnZogdGIBBzw78aABCrY4YCAI/
oQIDAQAB
-----END PUBLIC KEY-----
```

## rsaFlow.js

```
user@DESKTOP-96FRN6B MINGW64 /d/ccc109/ws/deno/12-security/03-RSA (master)
$ deno run -A rsaFlow.js
plaintext:  pay John => Mary $100
encrypted:  vUJVFfGoaYoMqiGrVJakFWuM251q2YlgOvWU7ny/NKLNg7QnylFQq78yLCtFlxRvgZhhJlJ7RoOyceiPKKLdOEdO/YOw5o3TmeYLEk9d4iE722YFZgFr+90HtqJ1K380a6VQNK0v5Qizr4OuI7737OLSUSYqwpw34gfcHnDz9KxYpynCt+695i5bWADlcgyVKazTK3p6OWekukBaf7xKWRvNH/ElK52cPKdHA0BWlFsb8MfgPJDhkv72tsmxDpOP3eO79i1oxS2BMlCdzX7jpxc/Qi66LfuDVhW/o1sT6/po2QH64KoXAFoiuGqmrvvOyrLypDnrSBTf3EbKLK3BWw==
decrypted:  pay John => Mary $100
isVerified= true
```

## simpleRSA.js

```
user@DESKTOP-96FRN6B MINGW64 /d/ccc109/ws/deno/12-security/03-RSA (master)
$ deno run -A rsaMy.js
M1= [ 65n, 22n, 37n, 18n, 29n ]
E1= [ 2790n, 2558n, 1350n, 2100n, 1912n ]
M2= [ 65n, 22n, 37n, 18n, 29n ]
```

## 數學背景

1. n = pq       // p, q 均為質數
2. r = (p-1)(q-1)
3. 找一 e 與 r 互質，並解得 e 的反元素 d， e*d = -1 mod r

e 為公鑰，d 為私鑰

## 程序

1. Alice.broadcast(n, e)
2. Bob.sendTo(Alice, c)
  * c = m^e (mod n)  // m 為訊息
3. Alice.receiveFrom(Bob, c)
  * c^d =m (mod n)

c^d = m^{ed} = m (mod N)

範例： 

```
p=61, q=53, n=61*53=3233, λ(3233)=lcm(61,53)=780

let e = 17 , compute d = 413

e*d = 1 mod λ(n)
17*413 = 1 mod 780
```

假如 Bob 要傳 m 給 Alice，則可以傳送 c=m^e (mod n) 這個密文，然後 Alice 透過下列方式解碼：

c^d = m^ed = m (mod n) 

