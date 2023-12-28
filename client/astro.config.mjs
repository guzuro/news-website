import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321/",
  integrations: [tailwind(), sitemap()],
  redirects: {
    "/": "/articles/1",
    "/articles": "/articles/1",
  },
});
