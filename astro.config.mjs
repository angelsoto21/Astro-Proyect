import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://angelsoto21.github.io',
  base: '/Astro-Proyect',
  integrations: [tailwind()]
});