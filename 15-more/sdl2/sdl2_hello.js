import { Canvas } from "https://deno.land/x/sdl2/mod.ts";

const canvas = new Canvas({
  title: "Hello, Deno!",
  height: 400,
  width: 600,
  centered: true,
  fullscreen: false,
  hidden: false,
  resizable: true,
  minimized: false,
  maximized: false,
  flags: null,
});

canvas.setDrawColor(0, 64, 255, 255);
canvas.clear();
canvas.present();

for await (const event of canvas) {
  switch (event.type) {
    case "draw":
      // Your game logic
      // ...
      break;
    case "mouse_motion":
      // Mouse stuff
      break;
    case "key_down":
      // Keyboard stuff
      break;
    // ...
    default:
      break;
  }
}