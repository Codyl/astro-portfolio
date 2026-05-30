import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

export default defineConfig({
  output: "server",
  site: "https://astro-portfolio-ovrx4w8jc-cody-lillywhites-projects.vercel.app/",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],

  adapter: vercel(),
});
