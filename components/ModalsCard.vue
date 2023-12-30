<template>
  <div
    :class="{
      '-translate-y-[120%]': !modals,
      'translate-y-0': modals,
    }"
    class="left-[1%] top-[1%] flex justify-between items-start ease-in-out duration-300 transition fixed rounded-lg w-auto p-4 bg-neutral-100 dark:bg-neutral-950 shadow-xl text-neutral-950 dark:text-neutral-200 z-50 pointer-events-auto bg-gray-800 gap-6"
  >
    <span class="text-sm capitalize">
      Hi, try clicking <span class="font-extrabold italic"> 'anywhere' </span>or
      press <span class="font-extrabold italic">'Enter'</span> <br />
      to change color mode😁 <br />
    </span>

    <div class="relative w-auto group cursor-none" @click="modals = false">
      <svg
        width="20"
        height="20"
        class="stroke-2 group stroke-white"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="rotate-0 origin-center group-hover:rotate-[45deg] duration-500 ease-in-out stroke-neutral-950 dark:stroke-neutral-100"
          d="M18 6L6 18"
          stroke=""
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          class="rotate-0 origin-center group-hover:rotate-[-45deg] duration-500 ease-in-out stroke-neutral-950 dark:stroke-neutral-100"
          d="M6 6L18 18"
          stroke=""
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
const modals = ref(false);
defineProps({
  position: {
    type: String,
    validator: (positionCard) =>
      ["top-left", "top-right", "bottom-left", "bottom-right"].includes(
        positionCard
      ),
  },
});
onMounted(() => {
  setTimeout((modals.value = true), 5000);
});
</script>
