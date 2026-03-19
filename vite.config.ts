import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { Mode, plugin as mdPlugin } from 'vite-plugin-markdown';

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    react(),
    mdPlugin({ mode: [Mode.MARKDOWN] }),
  ],
});
