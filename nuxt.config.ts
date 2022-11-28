// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/scss/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    'nuxt-purgecss',
    '@unlighthouse/nuxt',
    '@nuxt/content',
  ],
})
