import { renderToString } from "https://deno.land/x/dejs/mod.ts";

const template = `<body>
  <% if (name) { %>
    <h1>hello, <%= name %>!</h1>
  <% } %>
</body>`;

const output = await renderToString(template, {
    name: "world"
})
console.log(output)