import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  base: '/AK_Accounting_Tax_Consultancy/',
  plugins: [
    tailwindcss(), 
    react(),
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
        '/copyright'
      ]
    })
  ],
})
