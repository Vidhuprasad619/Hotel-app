// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
  ],
  ssr: true,
  nitro: {
    preset: 'netlify'
  }
})
