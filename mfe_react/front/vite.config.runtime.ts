import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./",
  resolve: {
    alias: [{ find: "src/", replacement: `${__dirname}/src/` }],
  },
  plugins: [react()],
  server: {
    host: "0.0.0.0",
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: ["runtime.html"],
      output: {
        dir: "runtimeOutput",
        entryFileNames: 'react-runtime/bundle-[name].js',
        format: 'iife',
        chunkFileNames: 'react-runtime/[name].js',
        assetFileNames: (assetInfo) => {
          const { name } = assetInfo
          console.log(name)
          if (/\.(jpe?g|png|gif|svg)$/.test(name ?? '')) {
            return 'react-runtime/assets/images/[name][extname]';
          }
          if (/\.css$/.test(name ?? '')) {
            return 'react-runtime/assets/styles/[name][extname]';
          }
          return 'react-runtime/assets/[name][extname]';
        },
        name: `__mfereact-runtime[name]`, // globalのnamespaceが衝突しないようにする
        extend: true
      },
    }
  }
});