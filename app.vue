<template>
  <!-- <PageLoader v-if="loading" /> -->
  <Transition v-if="loading">
    <div class="flex min-h-screen w-full items-center justify-center bg-black">
      <div class="loader"></div>
    </div>
  </Transition>
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

/* HTML: <div class="loader"></div> */
/* HTML: <div class="loader"></div> */
.loader {
  width: 35px;
  aspect-ratio: 1;
  border: 3px solid #fff;
  animation: l1 2s infinite;
}
@keyframes l1 {
  0% {
    border-radius: 50% 50% 0 0;
  }
  25% {
    border-radius: 0 50% 50% 0;
  }
  50% {
    border-radius: 0 0 50% 50%;
  }
  75% {
    border-radius: 50% 0 0 50%;
  }
  100% {
    border-radius: 50% 50% 0 0;
  }
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
