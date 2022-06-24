# GPU -- WebGL

* https://deno.land/x/deno@v1.9.2/op_crates/webgpu

* https://github.com/crowlKats/webgpu-examples


These examples are a deno port of the
[wgpu-rs examples](https://github.com/gfx-rs/wgpu-rs/tree/master/examples) but
using `utils`'s `createCapture`, `copyToBuffer` & `createPng` instead of a
swapchain as deno's webgpu implementation is headless.

To try out, upgrade deno to at least 1.8.0 and run the commands below.

```shell
$ cd hello-compute
$ deno run --unstable --allow-read --allow-write mod.ts
Uint32Array(4) [ 0, 2, 7, 55 ]
```
