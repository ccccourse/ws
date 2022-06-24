import { WebSocketClient, StandardWebSocketClient } from "https://deno.land/x/websocket@v0.1.3/mod.ts";
const endpoint = "ws://127.0.0.1:8080";
const ws: WebSocketClient = new StandardWebSocketClient(endpoint);
ws.on("open", function() {
  console.log("ws connected!");
  ws.send("something");
});
ws.on("message", function (message: MessageEvent) {
  console.log(message.data);
});