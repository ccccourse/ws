# Deno基礎

* https://deno.land/
    * https://doc.deno.land/builtin/stable (重要文件！)
* https://deno.land/std/examples (讚)

## hello.js

```
csienqu-teacher:basic csienqu$ deno run hello.js
Hello, 你好！
```

## read.js

```
csienqu-teacher:basic csienqu$ deno run -A read.js
// https://doc.deno.land/builtin/stable#Deno.readTextFile
const data = Deno.readTextFileSync("read.js");
console.log(data);
```

## write.js

```
csienqu-teacher:basic csienqu$ deno run -A write.js
```


## fetch

```
PS D:\ccc\course\deno\01-hello> deno run --allow-net fetch.js https://example.com
<!doctype html>
<html>
<head>
    <title>Example Domain</title>

    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
    body {
        background-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;

    }
    div {
        width: 600px;
        margin: 5em auto;
        padding: 2em;
        background-color: #fdfdff;
        border-radius: 0.5em;
        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
    }
    a:link, a:visited {
        color: #38488f;
        text-decoration: none;
    }
    @media (max-width: 700px) {
        div {
            margin: 0 auto;
            width: auto;
        }
    }
    </style>
</head>

<body>
<div>
    <h1>Example Domain</h1>
    <p>This domain is for use in illustrative examples in documents. You may use this
    domain in literature without prior coordination or asking for permission.</p>
    <p><a href="https://www.iana.org/domains/example">More information...</a></p>
</div>
</body>
</html>
```

## read.js

```
PS D:\ccc\course\deno\01-basics> deno run --allow-read read.js read.js  
for (let i = 0; i < Deno.args.length; i++) {
  let filename = Deno.args[i];
  let file = await Deno.open(filename);
  await Deno.copy(file, Deno.stdout);
  file.close();
}
```

## wasm.js

```
PS D:\ccc\course\deno\01-basics> deno run wasm.js
42
```

