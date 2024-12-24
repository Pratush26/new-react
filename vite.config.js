import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/new-react/', // Ensure this matches your GitHub Pages repository name
  build: {
    outDir: 'dist', // Confirm this is set to 'dist'
  },
});
