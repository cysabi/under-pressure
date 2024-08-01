import solidPlugin from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";
import devtools from "solid-devtools/vite";
import { defineConfig } from "vite";
import vike from "vike/plugin";
import vikeSolid from "vike-solid/vite";

export default defineConfig({
  plugins: [tailwindcss(), vike({ prerender: true }), vikeSolid(), devtools()],
});
