# Nodejs 知識集

## 基本用法

```
$ node hello.js // 執行 hello.js
```

## 套件安裝

```
$ npm i lodash // 安裝 lodash 套件
```

## 套件製作

```
$ npm init // 這時會產生 package.json 檔案

$ npm i lodash --save // 安裝套件 lodash 後修改 package.json

$ npm publish ./   // 出版這個套件
```


## 進階用法

1. 用 mocha 測試
2. 用 puppeteer 做 e2e 網站測試
3. 用 istanbul 做涵蓋度測試
4. 用 node-inspector 除錯 (v8-inspector, node debug 也行)
5. 用 node --prof hello.js 做效能測試
    * 然後用 node --prof-process *.log > prof.log 產生報表

## 網站設計

1. 用 koa (或 express) 建構 Server
2. 用 MongoDB (或 MySQL) 當資料庫

## 延伸工具

1. 用 babel 轉換新語法到舊語法
2. 用 sass 將多個 scss 檔案合併為一個 css
3. 純前端可用 github pages 架站
4. 有後端得搭配 linode 之類的雲端架站 (需付費，每月最低五元美金)

