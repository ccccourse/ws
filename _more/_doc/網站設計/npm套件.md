## npm 套件

除了預設的函式庫之外，我們也可以使用外部的套件。

在 node.js 當中，預設就有 npm (node package manager) 這個指令，可以用來管理、安裝、發布套件。

### 用 npm 安裝外部套件

我們可以使用 npm install 指令安裝套件，舉例而言，假如我們有一個程式 main.js 用到 lodash 套件，其原始碼如下：

檔案： main.js

```javascript
var _=require("lodash");

var set=_.intersection([1,3,7,9], [2,3,8,9]);
console.log("set=", set);
```

我們想要執行這個程式，於是切到 main.js 所在的資料夾後打入 node main.js ，結果卻發現下列情況。

```
nqu-192-168-61-142:package mac020$ ls
main.js
nqu-192-168-61-142:package mac020$ node main.js
module.js:338
    throw err;
    ^

Error: Cannot find module 'lodash'
    at Function.Module._resolveFilename (module.js:336:15)
    at Function.Module._load (module.js:286:25)
    at Module.require (module.js:365:17)
    at require (module.js:384:17)
    at Object.<anonymous> (/Users/mac020/Dropbox/cccwd/db/js1/code/package/main.js:1:69)
    at Module._compile (module.js:434:26)
    at Object.Module._extensions..js (module.js:452:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
    at Function.Module.runMain (module.js:475:10)

```

這代表我們沒有安裝 lodash 套件，因此我們必須要用下列 npm 指令先安裝 lodash 套件。

```
nqu-192-168-61-142:package mac020$ npm install lodash
lodash@4.6.1 node_modules/lodash

nqu-192-168-61-142:package mac020$ ls
main.js		node_modules

nqu-192-168-61-142:package mac020$ ls node_modules
lodash
```

這樣就安裝好該套件了，您可以用 ls 列出目前資料夾內容，會發現多出的一個 node_modules 的資料夾，裡面會有 lodash 子資料夾，這代表您已經安裝好了該套件。

接著我們就可以用 node main.js 指令執行原本的程式，這樣就不會再產生錯誤了！

``` 
nqu-192-168-61-142:package mac020$ node main.js
set= [ 3, 9 ]
```

以上就是在 node.js 裏用 npm 安裝外部套件的做法！

npm 目前已經有數十萬個套件可以供我們使用，您也可以自己定義套件，然後透過 npm publish 指令發布套件，以下《十分鐘系列》投影片詳細介紹了如何用 npm 創建並發布模組的方法，請您進一步閱讀以便學習這套非常方便且重要的方法。

* [用十分鐘瞭解JavaScript的模組 -- 《還有關於npm套件管理的那些事情》](https://www.slideshare.net/ccckmit/javascript-npm)

### 習題
1. 請寫一個函數，可以產生 n 個 a 到 b 之間的的整數亂數，並傳回該亂數陣列。
    * API： randomN(n, a, b)
    * 範例： randomN(3, 5, 10) => [6, 9, 7]
2. 請從 npm 當中尋找一個可以將檔案壓縮成 zip 的套件，並使用這個套件來寫出一個壓縮程式。(您可以從 npm 官網中輸入 zip 關鍵字查詢出這類套件)
    * 範例： $node zip somedir
    * 結果會將 somedir 資料夾整個壓縮成 somedir.zip
