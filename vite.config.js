import tailwind from "@tailwindcss/vite";
import devtools from "solid-devtools/vite";
import { defineConfig } from "vite";
import vike from "vike/plugin";
import solid from "vike-solid/vite";

export default defineConfig({
  plugins: [
    tailwind(),
    vike({ prerender: true, trailingSlash: false }),
    solid(),
    devtools(),
  ],
});
