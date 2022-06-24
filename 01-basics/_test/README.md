# test

```
user@DESKTOP-96FRN6B MINGW64 /d/ccc/code/ws/deno/02-lib/06-test (master)
$ deno test test1.js
Compile file:///D:/ccc/code/ws/deno/02-lib/06-test/.deno.test.ts       
running 1 tests
test hello world ... ok (12ms)

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered 
out (19ms)


user@DESKTOP-96FRN6B MINGW64 /d/ccc/code/ws/deno/02-lib/06-test (master)
$ deno test test2.js
Compile file:///D:/ccc/code/ws/deno/02-lib/06-test/.deno.test.ts
running 1 tests
test hello world ... FAILED (13ms)

failures:

hello world
AssertionError: Values are not equal:


    [Diff] Actual / Expected


-   3
+   4

    at assertEquals (https://deno.land/std/testing/asserts.ts:167:9)   
    at file:///D:/ccc/code/ws/deno/02-lib/06-test/test2.js:5:3
    at asyncOpSanitizer ($deno$/testing.ts:36:11)
    at Object.resourceSanitizer [as fn] ($deno$/testing.ts:70:11)      
    at TestApi.[Symbol.asyncIterator] ($deno$/testing.ts:264:22)       
    at TestApi.next (<anonymous>)
    at Object.runTests ($deno$/testing.ts:346:20)

failures:

        hello world

test result: FAILED. 0 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out (127ms)
```