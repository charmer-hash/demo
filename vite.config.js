import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [reactRefresh(), tailwindcss()],
  resolve: {
    alias: {
      '@/': '/src/',
    },
  },
});
