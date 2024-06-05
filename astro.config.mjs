import MillionLint from '@million/lint';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
const _plugins = [MillionLint.vite()];
export default defineConfig({
  site: 'https://sombochea.me',
  integrations: [mdx(), sitemap()]
});