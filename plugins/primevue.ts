// plugins/primevue.ts
import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Card from "primevue/card";
import Timeline from "primevue/timeline";
import Menubar from "primevue/menubar";
import AnimateOnScroll from "primevue/animateonscroll";
import Panel from "primevue/panel";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Card", Card);
  nuxtApp.vueApp.component("Timeline", Timeline);
  nuxtApp.vueApp.component("Menubar", Menubar);
  nuxtApp.vueApp.directive("animateonscroll", AnimateOnScroll);
  nuxtApp.vueApp.component("Panel", Panel);
});
