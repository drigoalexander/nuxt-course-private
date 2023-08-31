<template>
  <div
    class="w-1/2 min-h-screen flex items-center justify-center mx-auto flex-col gap-10"
  >
    <template v-if="error.statusCode === 404" class="flex flex-col gap-10">
      <h1 class="text-6xl font-bold">{{ error.statusCode }}</h1>
      <p class="text-xl font-semibold">{{ error.message }}</p>
    </template>
    <div
      class="staggering-grid-demo relative h-1/2 title grid grid-cols-12 w-full gap-[1px]"
    >
      <div
        @click="index = idx"
        :id="idx"
        class="rounded-md cursor-pointer hover:bg-green-800 el w-full aspect-square bg-green-500 transform"
        v-for="(el, idx) in 48"
      ></div>
    </div>
  </div>
</template>

<script setup>
const { $anime } = useNuxtApp();

const index = ref(29);
const error = useError();
onMounted(() => {
  $anime({
    targets: "div .staggering-grid-demo .el",
    scale: [
      { value: 0.1, easing: "easeOutSine", duration: 500 },
      { value: 1, easing: "easeInOutQuad", duration: 1000 },
    ],
    delay: $anime.stagger(200, { grid: [12, 4], from: "center" }),
  });
});

watch(index, () => {
  $anime({
    targets: ".staggering-grid-demo .el",
    scale: [
      { value: 0.1, easing: "easeOutSine", duration: 500 },
      { value: 1, easing: "easeInOutQuad", duration: 1000 },
    ],
    delay: $anime.stagger(200, { grid: [12, 4], from: index.value }),
  });
});
</script>
