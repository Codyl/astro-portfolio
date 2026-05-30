import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://Codyl.github.io",
  base: "/astro-portfolio/",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],

  adapter: vercel(),
});
