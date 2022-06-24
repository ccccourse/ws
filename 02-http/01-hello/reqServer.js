import { serve } from "https://deno.land/std@0.60.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  console.log('================================')
  console.log('req.headers=', req.headers) // 注意：Headers 是個 Map，不能直接用 JSON.stringify
  console.log('req=', req)
  req.respond({
    body: `
    method=${req.method}
    url=${req.url}
    proto=${req.proto}
    headers=${JSON.stringify(Object.fromEntries(req.headers), null, 2)}
    `});
}
