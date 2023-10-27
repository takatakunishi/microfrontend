// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: true,
  devtools: { enabled: true },
  vite: {
    build: {
      manifest: true,
      outDir: 'nuxt',
      rollupOptions: {
        output: {
          entryFileNames: '_nuxt/nuxt/bundle.js',
          format: 'iife',
          // chunkFileNames: (chuncInfo) => {
          //   const { name } = chuncInfo
          //   return `nuxt/${name}`
          // },
          assetFileNames: (assetInfo) => {
            const { name } = assetInfo
            console.log(name)
            if (/\.(jpe?g|png|gif|svg)$/.test(name ?? '')) {
              return 'nuxt/assets/images/[name][extname]';
            }
            if (/\.css$/.test(name ?? '')) {
              return 'nuxt/assets/styles/[name][extname]';
            }
            return 'nuxt/assets/[name][extname]';
          },
        }
      }
    }
  }
})
