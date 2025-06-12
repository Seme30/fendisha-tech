import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    // Enable React Fast Refresh
    fastRefresh: true,
    // Include .jsx and .js files with JSX
    include: "**/*.{js,jsx,ts,tsx}"
  })],
  server: {
    port: 3000,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'esnext',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      external: [],
      onwarn(warning, warn) {
        // Suppress eval warnings from lottie-web
        if (warning.code === 'EVAL' && warning.id?.includes('lottie')) return;
        warn(warning);
      },
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-animations';
            }
            if (id.includes('lottie-web')) {
              return 'vendor-lottie';
            }
            if (id.includes('react-icons') || id.includes('react-remixicon')) {
              return 'vendor-icons';
            }
            return 'vendor-misc';
          }

          // Page-based chunks
          if (id.includes('/Pages/Home/')) {
            return 'page-home';
          }
          if (id.includes('/Pages/WebDev/')) {
            return 'page-webdev';
          }
          if (id.includes('/Pages/AppDev/')) {
            return 'page-appdev';
          }
          if (id.includes('/Pages/Graphics/')) {
            return 'page-graphics';
          }
          if (id.includes('/Pages/ContactUs/')) {
            return 'page-contact';
          }
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
    exclude: ['@vitejs/plugin-react']
  },
  esbuild: {
    target: 'esnext'
  }
})
