# Diffie Hellman Key Exchange

## diffieHellmanInt.js

```
PS D:\ccc\ccc109a\se\deno\alg\14-cryptography\diffieHellman> deno run diffieHellmanInt.js
Alice.K = 2
Bob.K   = 2
```

![](https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Diffie-Hellman-Schl%C3%BCsselaustausch.svg/600px-Diffie-Hellman-Schl%C3%BCsselaustausch.svg.png)

1. 愛麗絲與鮑伯協定使用 p=23以及base g=5.
2. 愛麗絲選擇一個秘密整數a=6, 計算A = g^a mod p並行送給鮑伯。
    * A = 5^6 mod 23 = 8.
3. 鮑伯選擇一個秘密整數 b=15, 計算B = g^b mod p並行送給愛麗絲。
    * B = 5^15 mod 23 = 19.
4. 愛麗絲計算 s = B^a mod p
    * 19^6 mod 23 = 2.
5. 鮑伯計算s = A b mod p
    * 8^15 mod 23 = 2.

愛麗絲和鮑伯最終都得到了同樣的值，因為在模p下 g^ab = g^ba 相等。 注意a, b 和 g^ab = g^ba mod p 是秘密的。 其他所有的值 – p, g, g^a mod p, 以及 g^b mod p – 都可以在公共信道上傳遞。 一旦愛麗絲和鮑伯得出了公共秘密，他們就可以把它用作對稱金鑰，以進行雙方的加密通訊，因為這個金鑰只有他們才能得到。 當然，為了使這個例子變得安全，必須使用非常大的a, b 以及 p。

以下是一個更為一般的描述:

1. 愛麗絲和鮑伯協商一個有限迴圈群 G 和它的一個生成元 g。 （這通常在協定開始很久以前就已經規定好； g是公開的，並可以被所有的攻擊者看到。）
2. 愛麗絲選擇一個隨機自然數 a 並且將 g^a mod p傳送給鮑伯。
3. 鮑伯選擇一個隨機自然數 b 並且將 g^b mod p傳送給愛麗絲。
4. 愛麗絲 計算 (g^b)^a mod p
5. 鮑伯 計算 (g^a)^b mod p

## 原理

* [維基百科:迪菲-赫爾曼密鑰交換](https://zh.wikipedia.org/wiki/%E8%BF%AA%E8%8F%B2-%E8%B5%AB%E7%88%BE%E6%9B%BC%E5%AF%86%E9%91%B0%E4%BA%A4%E6%8F%9B) (讚！)
* [Public key cryptography: What is it?](https://www.khanacademy.org/computing/computer-science/cryptography/modern-crypt/v/diffie-hellman-key-exchange-part-1)
* [Diffie-hellman key exchange](https://www.khanacademy.org/computing/computer-science/cryptography/modern-crypt/v/diffie-hellman-key-exchange-part-2)


## 數學

定理： <img src="https://latex.codecogs.com/gif.latex?(g%5Ea)%5Eb%20%3D%20g%5E%7Bab%7D%20%3D%20(g%5Eb)%5Ea%20(mod%5C%3Bp)"/>


<img src="http://plantuml.rado0x54.com/png?uml=%40startuml%0D%0AAlice%20-%3E%20Alice%3A%20choose%20g%2C%20p%2C%20a%0D%0AAlice%20-%3E%20Alice%3A%20A%3Dg%5Ea%25p%0D%0AAlice%20-%3E%20Bob%3A%20g%2C%20p%2C%20A%0D%0ABob%20-%3E%20Bob%3A%20choose%20b%0D%0ABob%20-%3E%20Bob%3A%20B%20%3D%20g%5Eb%20%25p%0D%0ABob%20-%3E%20Bob%3A%20K%20%3D%20A%5Eb%20%25p%20%3D%20g%5Eab%20%25p%0D%0ABob%20-%3E%20Alice%3A%20B%0D%0AAlice%20-%3E%20Alice%3A%20K%3DB%5Ea%20%25%20p%20%3D%20g%5Eab%20%25%20p%0D%0A%40enduml"/>

<!--
(g^a %p)^b %p = g^{ab} %p = (g^b %p)^a %p

```
Alice                       Bob
a, g, p                     b
A = g^a % p    =(g,p,A)=>   B = g^b % p
K = B^a % p     <=(B)=      K = A^b % p
  = g^ab %p                   = g^ab %p
```
-->

