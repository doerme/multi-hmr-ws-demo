import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3002,
  },
  moduleFederation: {
    options: {
      name: 'remote',
      exposes: {
        './Button': './src/Button',
      },
      filename: 'remoteEntry.js',
    },
  },
});
