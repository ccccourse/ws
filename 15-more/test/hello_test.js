import { assert } from "https://deno.land/std/testing/asserts.ts";

Deno.test("simple test", async (t) => {
    const x=3, y=5
  
    await t.step("check x,y", async () => {
      assert(x==3);
      assert(y===5);
    });
  
    await t.step("check x+y", async () => {
      assert(x+y===8);
    });

  });