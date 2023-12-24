<template>
  <!-- <PageLoader v-if="loading" /> -->
  <Transition v-if="loading"><PageLoader /> </Transition>
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

.v-enter-active,
.v-leave-active {
  transition: all 0.4s;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
