import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://podcast4.me/",

  integrations: [
    icon(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});