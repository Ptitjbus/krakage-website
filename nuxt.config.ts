// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@pinia/nuxt", "@nuxtjs/i18n", "@nuxtjs/cloudinary"],
  i18n: {
    locales: [
      {
        code: 'fr',
        file: 'fr-FR.json',
        name: 'FR'
      },
      {
        code: 'en',
        file: 'en-US.json',
        name: 'EN'
      }
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'fr'
  }
})