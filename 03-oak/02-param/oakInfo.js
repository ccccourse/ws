import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  console.log('ctx=', ctx)
  console.log('ctx.request=', ctx.request)
  console.log('url=', ctx.request.url)
  ctx.response.body = `
    method=${ctx.request.method}
    url=${ctx.request.url.href}
    protocol=${ctx.request.url.protocol}
    hostname=${ctx.request.url.hostname}
    pathname=${ctx.request.url.pathname}
    hash=${ctx.request.url.hash}
    search=${ctx.request.url.search}
    searchParams=${ctx.request.url.searchParams}
    searchParams.get('name')=${ctx.request.url.searchParams.get('name')}
    headers=${JSON.stringify(Object.fromEntries(ctx.request.headers))}
  `;
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });

