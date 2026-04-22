// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // PENTING: Ganti dengan domain asli kamu. 
  // Sitemaps dan SEO memerlukan ini untuk membuat URL absolut.
  site: 'https://citta-six.vercel.app', 
  
  output: 'server',
  
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(), 
    vue(), 
    sitemap()
  ]
});