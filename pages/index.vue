<script setup>
import { useNuxtApp } from "#app";
const { $viewport } = useNuxtApp();
const { $anime } = useNuxtApp();
const config = useRuntimeConfig();
const columns = ref(1);
const rows = ref(1);
const widthRec = ref(50);
const heightRec = ref(50);
const themes = ref(["#fffdfb", "#1c1a19"]);
const colorMd = ref(["dark", "light"]);
let backgroundColor = ref("");
const colorMode = useColorMode();

useHead({
  script: [
    {
      type: "text/javascript",
      src: config.public.snapEndpoint,
      "data-client-key": config.public.mdClient,
    },
  ],
});

onMounted(() => {
  columns.value = Math.floor(document.body.clientWidth / widthRec.value);
  rows.value = Math.floor(document.body.clientHeight / heightRec.value);

  window.addEventListener("resize", () => {
    columns.value = Math.floor(document.body.clientWidth / widthRec.value);
    rows.value = Math.floor(document.body.clientHeight / heightRec.value);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      colorMode.value = colorMode.value === "dark" ? "light" : "dark";

      if (colorMode.value === "dark") {
        backgroundColor.value = "#1c1a19";
      } else if (colorMode.value === "light") {
        backgroundColor.value = "#fffdfb";
      }
      $anime({
        targets: ".tiles",
        backgroundColor: backgroundColor.value,
        delay: $anime.stagger(30, {
          grid: [columns.value, rows.value],
          from: "center",
        }),
      });
    }
  });
});

const ComputedColumns = computed(() => {
  return columns.value;
});

const ComputedRows = computed(() => {
  return rows.value;
});

function animate(idx) {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark";

  if (colorMode.value === "dark") {
    backgroundColor.value = "#1c1a19";
  } else if (colorMode.value === "light") {
    backgroundColor.value = "#fffdfb";
  }
  $anime({
    targets: ".tiles",
    backgroundColor: backgroundColor.value,
    delay: $anime.stagger(30, {
      grid: [columns.value, rows.value],
      from: idx,
    }),
  });
}
</script>

<template>
  <ModalsCard />
  <div ref="colorTrigger" class="pointer-events-auto z-20 sr-only absolute">
    <select v-model="$colorMode.preference">
      <option value="dark"></option>
      <option value="light"></option>
      <option value="neon"></option>
      <option value="magenta"></option>
    </select>
  </div>
  <div
    class="w-screen h-screen wrapper fixed z-0 top-0 left-0 gap-0"
    style="
       {
        grid-template-columns: repeat(var(--col), 1fr);
        grid-template-rows: repeat(var(--row), 1fr);
      }
    "
  >
    <div
      class="aspect-square w-[55px] tiles"
      v-for="(el, idx) in ComputedColumns * ComputedRows"
      @click="animate(idx)"
      :key="el"
    ></div>
  </div>
  <main class="pointer-events-none mb-40 z-10 relative">
    <div
      class="poi relative overflow-hidden dark:bg-darker lg:overflow-auto"
      id="home"
    >
      <div class="absolute inset-x-0 top-32 lg:hidden">
        <div
          aria-hidden="true"
          class="grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-60 2xl:mx-auto 2xl:max-w-6xl"
        >
          <div
            class="h-60 bg-gradient-to-br from-primary to-purple-400 blur-3xl dark:from-blue-700"
          ></div>
          <div
            class="h-72 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-indigo-600"
          ></div>
        </div>
      </div>
      <div class="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
        <div class="relative ml-auto pt-40 xl:pt-36">
          <div class="gap-12 md:flex md:items-center">
            <div
              class="text-center sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-1/2"
            >
              <h1
                class="text-4xl leading-normal font-black md:text-6xl xl:text-7xl"
              >
                Becoming a Nuxt Ninja: Level Up Your Skills!
              </h1>
              <div class="">
                <p class="mt-8 text-sm md:text-lg">
                  Embark on an epic journey to master Nuxt, the ultimate SSR
                  JavaScript framework based on Vue, with expert guidance to
                  unlock its full potential.
                </p>
                <div
                  class="mt-12 flex justify-center gap-4 sm:gap-6 md:justify-start"
                >
                  <NuxtLink
                    @click="navigateTo('/course')"
                    class="z-50 cursor-pointer pointer-events-auto relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                  >
                    <span
                      id="button"
                      class="relative px-5 py-2.5 transition-all ease-in duration-300 hover:px-10 rounded-md"
                    >
                      Get started
                    </span>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <AnimatedNuxtLogo
              v-if="$viewport.isGreaterOrEquals('tablet')"
              class="right-1/2 translate-x-3/4 scale-90"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="relative pt-32 md:pt-44" id="features">
      <div class="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
        <div class="mx-auto md:w-3/5">
          <h2 class="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
            Shaped to meet big industry ready needs
          </h2>
          <p class="mt-4 text-center text-gray-600 dark:text-gray-300">
            We've shaped our expertise to perfectly align with the demanding
            requirements of today's industry, ensuring you're prepared to meet
            its ever-evolving needs
          </p>
        </div>
        <div class="mt-16 md:mt-20">
          <div
            class="relative grid rounded-3xl border border-gray-200 p-1 dark:border-gray-800 lg:grid-cols-2"
          >
            <div class="absolute inset-0 hidden h-max dark:block lg:my-auto">
              <div
                aria-hidden="true"
                class="grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-70 2xl:mx-auto 2xl:max-w-6xl"
              >
                <div
                  class="h-60 bg-gradient-to-br from-primary to-jetYellow blur-3xl dark:from-jetFuchsia"
                ></div>
                <div
                  class="h-72 rounded-full bg-gradient-to-r from-jetPink to-jetPurple blur-3xl dark:from-transparent dark:to-jetYellow"
                ></div>
              </div>
            </div>
            <div>
              <div
                class="relative flex h-full flex-col items-center justify-center gap-6 p-8 py-16 lg:py-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-12 aspect-square"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>

                <div class="mx-auto text-center sm:w-2/5">
                  <h2 class="text-xl font-semibold">
                    Real case big industry project
                  </h2>
                  <p class="mt-3">
                    Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                    nobis dicta.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="relative grid overflow-hidden rounded-[1.25rem] bg-gray-100 p-1 dark:bg-gray-800/50 sm:grid-cols-2"
            >
              <div
                class="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none"
              >
                <div
                  class="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="m-auto h-6 w-6 text-gray-700 dark:text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h2 class="text-xl font-semibold dark:text-white">
                    Security first
                  </h2>
                  <p class="mt-3 text-gray-600 dark:text-gray-200">
                    Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                    nobis dicta.
                  </p>
                </div>
              </div>

              <div
                class="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none"
              >
                <div
                  class="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="m-auto h-6 w-6 text-gray-700 dark:text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h2
                    class="text-xl font-semibold text-gray-900 dark:text-white"
                  >
                    Payment Gateway
                  </h2>
                  <p class="mt-3 text-gray-600 dark:text-gray-200">
                    Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                    nobis dicta.
                  </p>
                </div>
              </div>

              <div
                class="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none"
              >
                <div
                  class="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="m-auto h-6 w-6 text-gray-700 dark:text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h2
                    class="text-xl font-semibold text-gray-900 dark:text-white"
                  >
                    Robust System
                  </h2>
                  <p class="mt-3 text-gray-600 dark:text-gray-200">
                    Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                    nobis dicta.
                  </p>
                </div>
              </div>

              <div
                class="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none"
              >
                <div
                  class="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="m-auto h-6 w-6 text-gray-700 dark:text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h2
                    class="text-xl font-semibold text-gray-900 dark:text-white"
                  >
                    Search engine
                  </h2>
                  <p class="mt-3 text-gray-600 dark:text-gray-200">
                    Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                    nobis dicta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-32 md:pt-44" id="solution">
      <div class="mx-auto max-w-screen px-6 md:px-12 lg:px-6 xl:px-0">
        <div
          class="flex-row-reverse items-center justify-center space-y-12 md:flex md:gap-6 lg:gap-12 lg:space-y-0"
        >
          <div class="md:w-2/3 mx-auto">
            <h2
              class="text-3xl font-bold md:text-4xl lg:text-5xl tracking-tighter text-center"
            >
              Just focus on your skills, we'll take care the curicullum
            </h2>
            <p
              class="my-12 md:w-3/4 leading-6 tracking-wider mx-auto text-center flex items-center justify-center"
            >
              Master Nuxt.js effortlessly as we take care of the curriculum
              details. Our meticulously crafted content ensures a relevant and
              focused learning experience, so you can excel in web development.
            </p>
          </div>
        </div>
        <div class="mt-8 md:pt-32 lg:mt-20 xl:mt-16">
          <PricingCard />
        </div>
        <div class="mt-8 md:pt-32 lg:mt-20 xl:mt-16">
          <div id="snap-container"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(v-bind(ComputedColumns), 1fr);
  grid-template-rows: repeat(v-bind(ComputedRows), 1fr);
}
</style>

<style>
.light-mode body {
  color: #4b5563;
}

.dark-mode #modal {
  background-color: #1f2937;
  color: white;
}

.light-mode #modal {
  background-color: #fffdfb;
  color: #4b5563;
}
.dark-mode #button {
  background-color: #1c1a19;
  color: white;
}

.light-mode #button {
  background-color: #fffdfb;
  color: #4b5563;
}
</style>
