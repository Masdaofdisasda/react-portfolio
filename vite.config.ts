import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { Mode, plugin as mdPlugin } from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    mdPlugin({ mode: [Mode.MARKDOWN]}),
  ],
});
