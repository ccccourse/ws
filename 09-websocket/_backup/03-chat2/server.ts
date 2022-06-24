import { WebSocket, WebSocketServer } from "https://deno.land/x/websocket@v0.0.5/mod.ts";

const wss = new WebSocketServer();
wss.on("connection", function (ws: WebSocket) {
  console.log("socket connected!");
  ws.on("message", function (message: string) {
    console.log(message);
    ws.send(message)
  });
});