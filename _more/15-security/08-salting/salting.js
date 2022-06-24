import * as bcrypt from "https://deno.land/x/bcrypt@v0.2.4/mod.ts";
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("mypassword", salt);
console.log('hash=', hash)
