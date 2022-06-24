# for await 語法

* 說明: https://stackoverflow.com/questions/61916839/deno-top-level-await

## 輸入

```
import { readLines } from "https://deno.land/std/io/bufio.ts";

for await (const line of readLines(Deno.stdin)) {
   console.log("you type: ", line);
}
```

## 網路

* https://github.com/denoland/deno/pull/3217

```
console.log(`http://${addr}/`);
for await (const req of server) {
  req.respond({ body });
}
```

