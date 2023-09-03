<template>
  <div
    class="absolute staggering-grid-demo left-0 top-0 -z-10 h-[100vh] title grid grid-cols-[repeat(24,_minmax(0,_1fr))] w-full gap-4"
  >
    <div
      style="
        border-radius: 10px;
        background: #161616;
        box-shadow: 20px 20px 60px #0c0c0c, -20px -20px 60px #202020;
      "
      class="shadow-neumor cursor-pointer el w-full aspect-square transform"
      v-for="(el, idx) in 336"
    ></div>
  </div>
</template>

<script setup>
const { $anime } = useNuxtApp();

onMounted(() => {
  $anime({
    targets: "div .staggering-grid-demo .el",
    scale: [
      { value: 0.1, easing: "easeOutSine", duration: 500 },
      { value: 1, easing: "easeInOutQuad", duration: 1000 },
    ],

    delay: $anime.stagger(200, { grid: [24, 14], from: "center" }),
    loop: true,
  });
});
</script>
