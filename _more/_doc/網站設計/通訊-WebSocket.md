
## 採用 WebSocket 方式的通訊範例

Node.js 的 socket.io 套件是對 WebSocket 通訊方式的一個易學易用包裝。

Socket.io 最簡單的入門範例是一個聊天室，請參考下列文章瞭解如何寫一個聊天室。

* <http://socket.io/get-started/chat/>

重要程式碼片段：

前端：

```html
<script src="/socket.io/socket.io.js"></script>
<script src="https://code.jquery.com/jquery-1.11.1.js"></script>
<script>
  $(function () {
    var socket = io();
    $('form').submit(function(){
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });
  });
</script>
```

後端：

```
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});
```

執行結果：

* 影片 -- <https://i.cloudup.com/transcoded/zboNrGSsai.mp4>

Socket.io 的官網裡有更多的應用範例，請用 git clone 下載 Socket.io 後執行其中的以下範例：

* <https://github.com/socketio/socket.io/tree/master/examples>

我建議大家仔細看其中兩個範例，一個是聊天室 chat (更完整版)，另一個是畫板 whiteboard 。

* <https://github.com/socketio/socket.io/tree/master/examples/chat>
* <https://github.com/socketio/socket.io/tree/master/examples/whiteboard>

然後透過這些範例進一步學習更多的 socket.io 使用方式。

