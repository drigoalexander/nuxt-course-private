// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@hypernym/nuxt-anime",
    "@nuxtjs/supabase",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
  ],
  build: {
    transpile: ["gsap"],
  },
  anime: {
    provide: true,
  },
  supabase: {
    redirect: false,
  },
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
});