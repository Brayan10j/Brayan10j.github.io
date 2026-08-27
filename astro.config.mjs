// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  integrations: [react()],
  site: 'https://Brayan10j.github.io',

  vite: {
    plugins: [tailwindcss()]
  }
});