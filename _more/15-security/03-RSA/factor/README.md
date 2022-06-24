# 因數分解


## 試除法

* [維基百科: 試除法](https://zh.wikipedia.org/wiki/%E8%AF%95%E9%99%A4%E6%B3%95)

```
PS D:\ccc\ccc109a\se\deno\alg\14-cryptography\factor> deno run factor.js
factor(15)= 3
factor(37)= -1
factor(9373467139)= 2141
factor(10000819)= -1    
factor(3093215881333057)= -1
factor(489133282872437279)= 2
489133282872437279= 489133282872437250       
489133282872437279.000001= 489133282872437250
```

## 米勒-拉賓質數判定法

* [維基百科: 米勒-拉賓質數判定法](https://zh.wikipedia.org/wiki/%E7%B1%B3%E5%8B%92-%E6%8B%89%E5%AE%BE%E6%A3%80%E9%AA%8C)

```
PS D:\ccc\ccc109a\se\deno\alg\14-cryptography\factor> deno run millerRabin.js
probablyPrime(37, 10)= true
probablyPrime(37, 10)= false
```