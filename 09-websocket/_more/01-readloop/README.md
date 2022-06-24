# readloop

## readloop.ts

```
PS D:\ccc\ccc109\ws\deno\08-websocket\01-readloop> deno run readloop.ts
Check file:///D:/ccc/ccc109/ws/deno/08-websocket/01-readloop/readloop.ts
hi
you type:  hi
hello
you type:  hello
ccc
you type:  ccc
```

## 錯誤處理：更新快取

若引用 deno 套件沒指定版本時，會使用快取中的版本，但若版本太舊，會造成錯誤！

此時可以用 deno cache --reload 更新。

不過最好還是在程式中指定特定版本比較好，否則很容易出錯！

```


Check file:///D:/ccc/ccc109/ws/deno/08-websocket/readline/readloop.ts
error: TS2345 [ERROR]: Argument of type 'string | URL' is not assignable to parameter of type 'string'.        
  Type 'URL' is not assignable to type 'string'.
  return new URL(url).pathname
                 ~~~
    at https://deno.land/std/path/win32.ts:911:18

TS2345 [ERROR]: Argument of type 'string | URL' is not assignable to parameter of type 'string'.
  return new URL(url).pathname;
                 ~~~
    at https://deno.land/std/path/posix.ts:433:18

Found 2 errors.
PS D:\ccc\ccc109\ws\deno\08-websocket\readline> deno cache --reload  https://deno.land/std/path/win32.ts       
Download https://deno.land/std/path/win32.ts
Download https://deno.land/std@0.70.0/path/win32.ts
Download https://deno.land/std@0.70.0/path/_interface.ts
Download https://deno.land/std@0.70.0/path/_constants.ts
Download https://deno.land/std@0.70.0/path/_util.ts
Download https://deno.land/std@0.70.0/_util/assert.ts
Check https://deno.land/std@0.70.0/path/win32.ts
PS D:\ccc\ccc109\ws\deno\08-websocket\readline> deno cache --reload  https://deno.land/std/path/posix.ts       
Download https://deno.land/std/path/posix.ts
Warning Implicitly using latest version (0.70.0) for https://deno.land/std/path/posix.ts
Download https://deno.land/std@0.70.0/path/posix.ts
Download https://deno.land/std@0.70.0/path/_interface.ts
Download https://deno.land/std@0.70.0/path/_constants.ts
Download https://deno.land/std@0.70.0/path/_util.ts
Check https://deno.land/std@0.70.0/path/posix.ts

```

