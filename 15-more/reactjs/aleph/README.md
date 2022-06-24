# aleph

## install

```
$ deno install -A -f -n aleph https://deno.land/x/aleph/cli.ts                 
Download https://deno.land/x/aleph/cli.ts
Warning Implicitly using latest version (v0.3.0-beta.19) for https://deno.land/x/aleph/cli.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/cli.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/server/config.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/server/helper.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/shared/fs.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/shared/log.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/shared/util.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/version.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/compiler/mod.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/shared/constants.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/types.d.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/server/localproxy.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/server/mime.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/bundler/esbuild.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/core/module.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/compiler/dist/checksum.js    
Download https://deno.land/x/aleph@v0.3.0-beta.19/compiler/dist/compiler.js    
Download https://deno.land/x/aleph@v0.3.0-beta.19/server/cache.ts
Download https://deno.land/x/esbuild@v0.13.2/mod.js
Download https://deno.land/x/esbuild@v0.13.2/mod.d.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/compiler/dist/wasm.js        
Check https://deno.land/x/aleph/cli.ts
✅ Successfully installed aleph
C:\Users\Hero3C\.deno\bin\aleph.cmd
C:\Users\Hero3C\.deno\bin\aleph (shell)
```


## create app

```
$ aleph init my-aleph-app
Download https://deno.land/x/aleph@v0.3.0-beta.19/commands/init.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/server/compress.ts
Check https://deno.land/x/aleph@v0.3.0-beta.19/commands/init.ts
Using VS Code? [y/n] y
Deploy to Vercel? [y/n] n
Downloading template. This might take a moment...
Apply template...
Cache deps...
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/core/mod.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/core/redirect.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/core/events.ts
Check https://deno.land/x/aleph@v0.3.0-beta.19/framework/core/mod.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/mod.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/components/Fallback.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/hoc.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/hooks.ts     
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/context.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/helper.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/core/routing.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/renderer.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/server/renderer.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/components/ErrorBoundary.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/pageprops.ts 
Download https://deno.land/x/aleph@v0.3.0-beta.19/server/aleph.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/bundler/mod.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/mod.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/plugins/css.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/server/analyzer.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/init.ts
Check https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/mod.ts
Done

Aleph.js is ready to go!
▲ cd my-aleph-app
▲ aleph dev    # start the app in `development` mode
▲ aleph start  # start the app in `production` mode
▲ aleph build  # build the app to a static site (SSG)

Docs: https://alephjs.org/docs
Bugs: https://alephjs.org.com/alephjs/aleph.js/issues

$ cd my-aleph-app/
$ ls
api/     components/  import_map.json  pages/   style/
app.tsx  deno.json    lib/             public/  vercel.json
$ aleph dev
Unsupported compiler options in "file:///C:/ccc/course/ws/15-more/reactjs/aleph/my-aleph-app/deno.json".
  The following options were ignored:
    target
Check https://deno.land/x/aleph/cli.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/commands/dev.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/server/mod.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/commands/helper/flags.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/server/oak.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/server/server.ts
Download https://deno.land/x/aleph@v0.3.0-beta.19/server/response.ts
Unsupported compiler options in "file:///C:/ccc/course/ws/15-more/reactjs/aleph/my-aleph-app/deno.json".
  The following options were ignored:
    target
INFO Download https://esm.sh/react-refresh@0.10.0/runtime?dev
INFO Download https://cdn.esm.sh/v66/react-refresh@0.10.0/deno/runtime.development.js
INFO Download https://esm.sh/react@17.0.2?dev
INFO Download https://esm.sh/react-dom@17.0.2/server?dev
INFO Download https://cdn.esm.sh/v53/react@17.0.2/deno/react.development.js
INFO Download https://cdn.esm.sh/v53/react-dom@17.0.2/deno/server.development.js
INFO Download https://cdn.esm.sh/v53/object-assign@4.1.1/deno/object-assign.development.js
Unsupported compiler options in "file:///C:/ccc/course/ws/15-more/reactjs/aleph/my-aleph-app/deno.json".
  The following options were ignored:
    target
INFO Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/bootstrap.ts
INFO Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/core/hmr.ts
INFO Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/core/nomodule.ts
INFO Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/components/Head.ts
INFO Download https://esm.sh/react-dom@17.0.2?dev
INFO Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/components/Router.ts
INFO Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/pagedata.ts
INFO Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/components/CustomScript.ts
INFO Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/components/InlineStyle.ts
INFO Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/react/components/StyleLink.ts
INFO Download https://cdn.esm.sh/v53/react-dom@17.0.2/deno/react-dom.development.js
INFO Download https://deno.land/x/aleph@v0.3.0-beta.19/framework/core/style.ts
INFO Download https://cdn.esm.sh/v53/scheduler@0.20.2/deno/tracing.development.js
INFO Download https://cdn.esm.sh/v53/scheduler@0.20.2/deno/scheduler.development.js
INFO Start watching code changes...
INFO Server ready on http://localhost:8080/
```

