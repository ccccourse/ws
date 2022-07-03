# fresh

* https://fresh.deno.dev/


## run (success!)

```
$ deno upgrade
Looking up latest version
Found latest version 1.23.2
Checking https://github.com/denoland/deno/releases/download/v1.23.2/deno-x86_64-pc-windows-msvc.zip
25.5 MiB / 25.5 MiB (100.0%)
Deno is upgrading to version 1.23.2
Upgraded successfully
$ deno run -A -r https://fresh.deno.dev my-app
Download https://fresh.deno.dev/
Download https://deno.land/x/fresh@1.0.0/init.ts
Download https://deno.land/x/fresh@1.0.0/src/dev/deps.ts
Download https://deno.land/x/fresh@1.0.0/src/dev/error.ts
Download https://deno.land/x/fresh@1.0.0/src/dev/mod.ts  
Download https://deno.land/std@0.128.0/flags/mod.ts
Download https://deno.land/std@0.128.0/fmt/colors.ts
Download https://deno.land/std@0.128.0/fs/walk.ts   
Download https://deno.land/std@0.128.0/path/mod.ts  
Download https://deno.land/x/semver@v1.4.0/mod.ts
Download https://deno.land/std@0.128.0/_util/assert.ts
Download https://deno.land/std@0.128.0/_util/os.ts
Download https://deno.land/std@0.128.0/path/_interface.ts
Download https://deno.land/std@0.128.0/path/common.ts
Download https://deno.land/std@0.128.0/path/glob.ts
Download https://deno.land/std@0.128.0/path/posix.ts
Download https://deno.land/std@0.128.0/path/separator.ts
Download https://deno.land/std@0.128.0/path/win32.ts
Download https://deno.land/std@0.128.0/path/_constants.ts
Download https://deno.land/std@0.128.0/path/_util.ts
Do you want to use 'twind' (https://twind.dev/) for styling? [y/N] y
The manifest has been generated for 3 routes and 1 islands.

Project created!
Run `deno task start` in the project directory to get started.
$ cd my-app/
$ deno task start
Warning deno task is unstable and may drastically change in the future
Task start deno run -A --watch=static/,routes/ dev.ts
Watcher Process started.
Download https://deno.land/x/fresh@1.0.0/dev.ts
The manifest has been generated for 3 routes and 1 islands.
Download https://deno.land/x/fresh@1.0.0/server.ts
Download https://esm.sh/twind@0.16.17/sheets
Download https://deno.land/x/fresh@1.0.0/runtime.ts
Download https://esm.sh/twind@0.16.17
Download https://esm.sh/preact@10.8.1
Download https://esm.sh/preact@10.8.1/hooks
Download https://deno.land/x/fresh@1.0.0/src/server/mod.ts
Download https://deno.land/x/fresh@1.0.0/src/runtime/csp.ts
Download https://deno.land/x/fresh@1.0.0/src/runtime/head.ts
Download https://deno.land/x/fresh@1.0.0/src/runtime/utils.ts
Download https://esm.sh/v86/twind@0.16.17/deno/twind.js
Download https://esm.sh/v86/twind@0.16.17/twind.d.ts
Download https://deno.land/x/fresh@1.0.0/src/server/context.ts
Download https://deno.land/x/fresh@1.0.0/src/server/deps.ts
Download https://deno.land/x/fresh@1.0.0/src/server/render.tsx
Download https://deno.land/x/fresh@1.0.0/src/server/types.ts
Download https://esm.sh/v86/style-vendorizer@2.1.1/deno/style-vendorizer.js
Download https://esm.sh/v86/preact@10.8.1/deno/hooks.js
Download https://esm.sh/v86/preact@10.8.1/hooks/src/index.d.ts
Download https://esm.sh/v86/twind@0.16.17/deno/sheets.js
Download https://esm.sh/v86/twind@0.16.17/sheets/sheets.d.ts
Download https://esm.sh/v86/preact@10.8.1/deno/preact.js
Download https://esm.sh/v86/preact@10.8.1/src/index.d.ts
Download https://esm.sh/v86/csstype@3.1.0/index.d.ts
Download https://crux.land/router@0.0.11
Download https://deno.land/std@0.128.0/http/server.ts
Download https://deno.land/x/esbuild@v0.14.39/mod.js
Download https://deno.land/x/esbuild_deno_loader@0.5.0/mod.ts
Download https://deno.land/x/media_types@v2.10.2/mod.ts
Download https://unpkg.com/esbuild-wasm@0.14.39/esm/browser.js
Download https://deno.land/x/esbuild@v0.14.39/mod.d.ts
Download https://esm.sh/v86/preact@10.8.1/src/jsx.d.ts
Download https://deno.land/x/fresh@1.0.0/src/server/constants.ts
Download https://esm.sh/preact-render-to-string@5.2.0?deps=preact@10.8.1
Download https://deno.land/x/fresh@1.0.0/src/server/bundle.ts
Download https://deno.land/x/fresh@1.0.0/src/server/default_error_page.tsx
Download https://deno.land/x/media_types@v2.10.2/db.ts
Download https://deno.land/x/media_types@v2.10.2/deps.ts
Download https://deno.land/x/esbuild_deno_loader@0.5.0/deps.ts
Download https://deno.land/x/esbuild_deno_loader@0.5.0/src/deno.ts
Download https://deno.land/x/esbuild_deno_loader@0.5.0/src/native_loader.ts   
Download https://deno.land/x/esbuild_deno_loader@0.5.0/src/portable_loader.ts 
Download https://esm.sh/v86/preact-render-to-string@5.2.0/X-ZC9wcmVhY3RAMTAuOC4x/deno/preact-render-to-string.js
Download https://esm.sh/v86/preact-render-to-string@5.2.0/X-ZC9wcmVhY3RAMTAuOC4x/src/index.d.ts
Download https://deno.land/std@0.128.0/async/mod.ts
Download https://crux.land/api/get/router@0.0.11
Download https://deno.land/std@0.139.0/path/mod.ts
Download https://deno.land/x/importmap@0.2.1/mod.ts
Download https://deno.land/std@0.128.0/async/deadline.ts
Download https://deno.land/std@0.128.0/async/debounce.ts
Download https://deno.land/std@0.128.0/async/deferred.ts
Download https://deno.land/std@0.128.0/async/delay.ts
Download https://deno.land/std@0.128.0/async/mux_async_iterator.ts
Download https://deno.land/std@0.128.0/async/pool.ts
Download https://deno.land/std@0.128.0/async/tee.ts
Download https://deno.land/std@0.139.0/_util/os.ts
Download https://deno.land/std@0.139.0/path/_interface.ts
Download https://deno.land/std@0.139.0/path/common.ts
Download https://deno.land/std@0.139.0/path/glob.ts
Download https://deno.land/std@0.139.0/path/posix.ts
Download https://deno.land/std@0.139.0/path/separator.ts
Download https://deno.land/std@0.139.0/path/win32.ts
Download https://deno.land/x/importmap@0.2.1/_util.ts
Download https://deno.land/std@0.139.0/path/_constants.ts
Download https://deno.land/std@0.139.0/path/_util.ts
Download https://deno.land/std@0.139.0/_util/assert.ts
Download https://crux.land/api/get/uYQG
Download https://crux.land/api/get/uYQG.ts
Server listening on http://localhost:8000
Download https://deno.land/x/fresh@1.0.0/src/runtime/main.ts
```
