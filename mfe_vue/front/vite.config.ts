/// <reference types="vitest/config" />
// import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  root: "./",
  resolve: {
    alias: [
      { find: "src/", replacement: `${__dirname}/src/` },
      // { '@': fileURLToPath(new URL('./src', import.meta.url)) }
    ],

  },
  // plugins: [vue()],
  plugins: [vue({
    // template: {
    //   compilerOptions: {
    //     isCustomElement: (tag) => tag.includes('-')
    //   }
    // },
    customElement: true,
  })],
  server: {
    host: "0.0.0.0",
  },
  build: {
    manifest: true, // マイクロフロントエンドのコンテナアプリが、このフロントエンドのコンテンツを読み込むために必要
    rollupOptions: {
      // input: ["src/main.ts"],
      // input: ["src/runtime.ts"],
      // input: ["runtime.html"],
      input: ["index.html"],
      // input: ["src/main.ts", "index.html"],
      // input: {
      //   main: "index.html",
      //   runtime: "runtime.html"
      // },
      output: {
        entryFileNames: 'vue/bundle-[name].js',
        format: 'iife',
        chunkFileNames: 'vue/[name].js',
        assetFileNames: (assetInfo) => {
          const { name } = assetInfo
          console.log(name)
          if (/\.(jpe?g|png|gif|svg)$/.test(name ?? '')) {
            return 'vue/assets/images/[name][extname]';
          }
          if (/\.css$/.test(name ?? '')) {
            return 'vue/assets/styles/[name][extname]';
          }
          return 'vue/assets/[name][extname]';
        },
        name: `__mfevue[name]`, // globalのnamespaceが衝突しないようにする
        extend: true,
        // inlineDynamicImports: false
        // generatedCode: {
        //   symbols: true
        // }
      },
    },
    // lib: {
    //   formats: ["es"],
    //   entry: `${__dirname}/src/main.ts`,
    // }
  }
})
