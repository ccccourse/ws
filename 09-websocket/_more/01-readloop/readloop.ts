// import { readLines } from "https://deno.land/std@0.70.0/io/bufio.ts";
import { readLines } from "https://deno.land/std/io/bufio.ts";

for await (const line of readLines(Deno.stdin)) {
   console.log("you type: ", line);
}