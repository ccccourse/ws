## MongoDB文件資料庫

## 用 Node.js 存取 mongodb

您若要在 node.js 當中存取 mongoDB 的資料，必須先用 npm 安裝 mongoDB 的套件。

```
npm install mongodb
```

### 程式範例: mongotest.js

參考： <https://mongodb.github.io/node-mongodb-native/api-articles/nodekoarticle1.html>


```javascript
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/examdb", function(err, db) {
  if(err) { return console.dir(err); }

  var collection = db.collection('Q');
  var docs = [{ type:"word", q:"he=他"}, { type:"word", q:"she=她"}, { type:"word", q:"it=它"} ];

  collection.insert(docs, {w:1}, function(err, result) { // success!

    collection.find().toArray(function(err, items) {
        console.log("items=%j", items);
        db.close();
    });
  });
});
```

執行結果：

```
nqu-192-168-61-142:KoaExam mac020$ node mongotest
items=[{"_id":"5716e82ea6c866eb02ffe700","type":"word","q":"he=他"},{"_id":"5716e82ea6c866eb02ffe701","type":"word","q":"she=她"},{"_id":"5716e82ea6c866eb02ffe702","type":"word","q":"it=它"}]
```

### 採用 yield 的寫法

檔案： comongotest.js

```
var co = require("co");

var MongoClient = require('mongodb').MongoClient;

co(function*() {
  var db = yield MongoClient.connect('mongodb://localhost:27017/examdb');
  var collection = db.collection('Q');
  var result = yield collection.insertMany([{ type:"word", q:"he=他"}, { type:"word", q:"she=她"}, { type:"word", q:"it=它"} ], {w:1});
  var items = yield collection.find().toArray();
  console.log("items=%j", items);
  var result = yield db.close();
});

```

執行結果

```
NQU-192-168-60-101:js csienqu$ node comongotest
items=[{"_id":"57201788d3c8212f034d9479","type":"word","q":"he=他"},{"_id":"57201788d3c8212f034d947a","type":"word","q":"she=她"},{"_id":"57201788d3c8212f034d947b","type":"word","q":"it=它"}]

```
