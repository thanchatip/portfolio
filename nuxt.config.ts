export default defineNuxtConfig({
  build: {
    transpile: ['primevue'],
  },

  css: [
    'primevue/resources/themes/aura-light-green/theme.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',
  ],
});
