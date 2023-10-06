import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  root: "./",
  resolve: {
    alias: [{ find: "src/", replacement: `${__dirname}/src/` }],
  },
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
  },
  build: {
    manifest: true, // マイクロフロントエンドのコンテナアプリが、このフロントエンドのコンテンツを読み込むために必要
    rollupOptions: {
      output: {
        entryFileNames: `bundle.js`,
      },
    },
    // lib: {
    //   formats: ["es"],
    //   entry: `${__dirname}/src/main.ts`,
    // }
  }
})
