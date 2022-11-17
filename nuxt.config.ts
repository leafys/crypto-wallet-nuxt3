export default defineNuxtConfig({
  css: ['~/assets/css/app.css'],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
      },
    ],
  ],
});
