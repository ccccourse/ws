import { readFileStr, writeFileStr } from "https://deno.land/std/fs/mod.ts";
let text = await readFileStr("./test.md", { encoding: "utf8" }); // returns a promise
// readFileStrSync("./target.dat", { encoding: "utf8" }); // string
await writeFileStr("./test2.md", text);
