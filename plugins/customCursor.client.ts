import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    document.addEventListener("mousemove", (event: MouseEvent) => {
      const cursor = document.querySelector(
        ".custom-cursor"
      ) as HTMLElement | null;
      if (cursor) {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
      }
    });
  }
});
