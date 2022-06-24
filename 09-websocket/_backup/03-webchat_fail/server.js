import { listenAndServe } from "https://deno.land/std/http/server.ts";
import { acceptWebSocket, acceptable } from "https://deno.land/std/ws/mod.ts";

let chatUsers = [];
listenAndServe({ port: 8000 }, async (req) => {
    if (req.method === "GET" && req.url === "/") {
        if (acceptable(req)) {
            acceptWebSocket({
                conn: req.conn,
                bufReader: req.r,
                bufWriter: req.w,
                headers: req.headers,
            }).then(async(socket) => {
                for await (let data of socket) {
                    const event = typeof data === "string" ? JSON.parse(data) : data;
                    if (event.event == "open") { 
                        chatUsers.push(socket);
                    }
                    else if (event.event == "message"){ 
                        for (let i = 0; i < chatUsers.length; i++) {
                            try {
                                await chatUsers[i].send(JSON.stringify(event));
                                console.log('message sent to client');
                            }
                            catch (error) { 
                                chatUsers.splice(i, 1);
                                i--;
                                console.log('catch');
                            }
                        }
                    }
                }
            });
        }
    }
});
console.log("Server started on port 8000");