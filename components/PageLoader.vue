<template>
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
</template>

<script setup>
const { $anime } = useNuxtApp();
defineProps;

$anime({
  targets: "div .staggering-grid-demo .el",
  scale: [
    { value: 0.1, easing: "easeOutSine", duration: 500 },
    { value: 1, easing: "easeInOutQuad", duration: 1000 },
  ],
  delay: $anime.stagger(200, { grid: [12, 4], from: index.value }),
  loop: true,
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

defineEmits(["update:index"]);
</script>
