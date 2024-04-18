import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://ctysse.net',
  integrations: [mdx(), sitemap()],
  output: "static",
  adapter: netlify()
});