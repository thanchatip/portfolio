export default defineNuxtConfig({
  build: {
    transpile: ["primevue"],
  },
  plugins: [{ src: "~/plugins/customCursor.client.ts", mode: "client" }],

  css: [
    "primevue/resources/themes/aura-light-green/theme.css",
    "primeicons/primeicons.css",
    "primeflex/primeflex.css",
  ],
});
