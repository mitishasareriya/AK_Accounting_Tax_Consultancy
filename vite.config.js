import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

import fs from 'fs/promises';

const copyIndexTo404Plugin = () => {
  return {
    name: 'copy-index-to-404',
    closeBundle: async () => {
      try {
        await fs.copyFile('dist/index.html', 'dist/404.html');
        console.log('Copied dist/index.html to dist/404.html for GitHub Pages routing fix');
      } catch (err) {
        console.error('Failed to copy index.html to 404.html', err);
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/AK_Accounting_Tax_Consultancy/',
  plugins: [
    tailwindcss(), 
    react(),
    copyIndexTo404Plugin(),
    Sitemap({
      hostname: 'https://mitishasareriya.github.io/AK_Accounting_Tax_Consultancy/',
      generateRobotsTxt: true,
      dynamicRoutes: [
        '/',
        '/about',
        '/services',
        '/financial-calculators',
        '/financial-calculators/gst',
        '/case-studies',
        '/blog',
        '/contact',
        '/privacy',
        '/terms',
        '/copyright',
        '/coming-soon'
      ]
    })
  ],
})
