<template>
  <PageLoader v-if="loading" />

  <LazyNuxtPage />
</template>

<script setup lang="ts">
const nuxt = useNuxtApp();
const loading = ref(false);

nuxt.hook("page:start", () => {
  loading.value = true;
});

nuxt.hook("page:finish", () => {
  loading.value = false;
});
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Nuxt 3 Course` : "Nuxt 3 Course";
  },
});
</script>

<style>
body {
  font-family: Montserrat;
}
</style>
