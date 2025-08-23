// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: false,
  app: {
    baseURL:'/'
  },
  nitro:{
    preset:'github-pages'
  }
})
