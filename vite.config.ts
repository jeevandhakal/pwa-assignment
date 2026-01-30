import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Task Motivator PWA',
        short_name: 'TaskPWA',
        description: 'Task management with motivational quotes',
        theme_color: '#ffffff',
        start_url: '/',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        // Define runtime caching for the quotes API
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === 'https://dummyjson.com' && url.pathname === '/quotes/random',
            handler: 'NetworkFirst', // Try network first, fall back to cache if offline
            options: {
              cacheName: 'quotes-api-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 // Cache for 24 hours
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],
})