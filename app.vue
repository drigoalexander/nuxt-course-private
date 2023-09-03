<template>
  <NuxtLayout>
    <!-- <PageLoader v-if="loading" /> -->
    <LazyNuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Nuxt 3 Course` : "Nuxt 3 Course";
  },
});
</script>
