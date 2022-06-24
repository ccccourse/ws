# BigInt

## JavaScript 新增了大整數型態

```
user@DESKTOP-96FRN6B MINGW64 /d/ccc109/ws/deno/12-security/03-RSA (master)
$ deno
Deno 1.6.2
exit using ctrl+d or close()
> var x = 3n**100n
undefined
> x
515377520732011331036461129765621272702107522001n
> var y = 2n**100n
undefined
> y
1267650600228229401496703205376n
> x+y
515377520732011332304111729993850674198810727377n
> x*y
653318623500070906096690267158057820537143710472954871543071966369497141477376n
> x/y
406561177535215237n
> x**2
Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
    at <anonymous>:2:2
> x**2n
265613988875874769338781322035779626829233452653394495974574961739092490901302182994384699044001n
```

## 用大整數實作 RSA

```
user@DESKTOP-96FRN6B MINGW64 /d/ccc109/ws/deno/12-security/04-bigInt (master)
$ deno run -A rsaMy.js
M1= [ 65n, 22n, 37n, 18n, 29n ]
E1= [ 2790n, 2558n, 1350n, 2100n, 1912n ]
M2= [ 65n, 22n, 37n, 18n, 29n ]
```