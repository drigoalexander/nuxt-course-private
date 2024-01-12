// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  runtimeConfig: {
    public: {
      mdClient: process.env.MD_ClIENT,
      snapEndpoint: process.env.SNAP_ENDPOINT,
    },
    mdSecret: process.env.MD_SECRET,
    mdEnpoint: process.env.MIDTRANS_ENDPOINT,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@hypernym/nuxt-anime",
    "@nuxtjs/supabase",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "nuxt-viewport",
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
