import { Client, Pool } from "https://deno.land/x/pg@v0.5.0/mod.ts";

const client = new Client({
  user: 'postgres',
  hostname: '127.0.0.1',
  database: 'blog',
  password: 'ccc123456',
  port: 5432
});

await client.connect();
// 若出現 error: Uncaught Error: Unknown Authentication type, code: 10, message: SCRA
// 請參考解法 https://stackoverflow.com/questions/64210167/unable-to-connect-to-postgress-db-due-to-the-authentication-type-10-is-not-suppo

var res = await client.query('SELECT * FROM posts');

// const res = await client.query('SELECT * from weather');
console.log(res.rows);
await client.end();
