import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import clerk from "@clerk/astro";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import { neobrutalism } from '@clerk/themes'
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://podcast4.me/",
  output: "server",

  integrations: [tailwind(), icon(), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  }), react(), clerk({
    appearance: {
        baseTheme: neobrutalism,
      },
    }),
  ],

  adapter: vercel(),
});