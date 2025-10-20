// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    dbUser: "",
      dbName: "",
      dbPassword: "",
      dbHost: "",
      dbPort: "",
      debugMode: 1,
  }
})