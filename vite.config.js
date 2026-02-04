import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// URL Mapping: Clean paths to actual HTML files
const urlRewrites = {
  '/': '/index.html',
  '/home': '/index.html',
  '/about': '/about-en.html',
  '/about-vn': '/about.html',
  '/contact': '/contact-en.html',
  '/contact-vn': '/contact.html',
  '/features': '/index.html',
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Custom plugin for URL rewrites
    {
      name: 'html-rewrite',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Check if the URL matches one of our clean paths
          const cleanPath = req.url?.split('?')[0]; // Remove query strings
          if (cleanPath && urlRewrites[cleanPath]) {
            req.url = urlRewrites[cleanPath];
          }
          next();
        });
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        vi: 'vi.html',
        about: 'about.html',
        aboutEn: 'about-en.html',
        contact: 'contact.html',
        contactEn: 'contact-en.html',
      },
    },
  },
})
