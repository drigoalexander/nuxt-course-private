// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@hypernym/nuxt-anime",
    "@nuxtjs/supabase",
    "@nuxtjs/color-mode",
  ],

  anime: {
    provide: true,
  },
  supabase: {
    redirect: false,
  },
});
