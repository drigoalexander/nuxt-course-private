<script setup>
// import { RocketLaunchIcon, ChartBarIcon } from "@heroicons/vue/24/outline";
const { $anime } = useNuxtApp();

const columns = ref(1);
const rows = ref(1);
const widthRec = ref(50);
const heightRec = ref(50);
const themes = ref(["#FCF84A", "#FE2857", "#AF1DF5", "#171717"]);
let themeIdx = ref(0);
const colorMode = useColorMode;

onMounted(() => {
  columns.value = Math.floor(document.body.clientWidth / widthRec.value);
  rows.value = Math.floor(document.body.clientHeight / heightRec.value);

  window.addEventListener("resize", () => {
    columns.value = Math.floor(document.body.clientWidth / widthRec.value);
    rows.value = Math.floor(document.body.clientHeight / heightRec.value);
  });
});

const ComputedColumns = computed(() => {
  return columns.value;
});

const ComputedRows = computed(() => {
  return rows.value;
});

function animate(idx) {
  themeIdx.value++;
  if (themeIdx.value === 4) {
    themeIdx.value = 0;
  }
  $anime({
    targets: ".tiles",
    backgroundColor: themes.value[themeIdx.value],
    delay: $anime.stagger(30, {
      grid: [columns.value, rows.value],
      from: idx,
    }),
  });
}

function test() {
  console.log("asd");
}
</script>

<template>
  <div class="sr-only" @keydown.enter="test">
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
                class="text-5xl font-black dark:text-white md:text-6xl xl:text-7xl"
              >
                Becoming a Nuxt Ninja: Level Up Your Skills!
              </h1>
              <div class="">
                <p class="mt-8 text-lg text-gray-700 dark:text-gray-100">
                  Embark on an epic journey to unlock the full potential of
                  Nuxt, the ultimate SSR JavaScript framework based on Vue.
                  Discover the secrets, hone your skills, and become a true Nuxt
                  master with our expert guidance.
                </p>
                <div
                  class="mt-12 flex justify-center gap-4 sm:gap-6 md:justify-start"
                >
                  <NuxtLink
                    @click="navigateTo('/course')"
                    class="pointer-events-auto cursor-pointer before:bg-primary astro-Z4ZYBUMP"
                    ><span class="text-white astro-Z4ZYBUMP">
                      Get Started
                    </span></NuxtLink
                  >
                </div>
              </div>
            </div>
            <AnimatedNuxtLogo class="right-1/2 translate-x-3/4 scale-90" />
          </div>

          <div class="mt-8 text-center md:mt-32 lg:mt-20 xl:mt-16">
            <span
              class="text-sm font-semibold tracking-wider text-gray-800 dark:text-white"
              >TRUSTED BY YOUR FAVORED TOP TECHS COMPANIES</span
            >
            <div
              class="mt-8 flex flex-wrap items-center justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 sm:justify-between lg:gap-24"
            >
              <img
                class="h-8 w-auto lg:h-14"
                src="https://play-lh.googleusercontent.com/pHXtOQQ__TBgp_c9FgfBOCp4cXL9oU5tVAe318JDvcQP266UCO7U_VyO6lUzo8ZWPWJ_=w240-h480-rw"
                srcset="
                  https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Trade_Republic_logo_2021.svg/1200px-Trade_Republic_logo_2021.svg.png
                "
                loading="lazy"
                alt="airbnb"
                width="100"
                height=""
              />
              <img
                class="h-6 w-auto lg:h-10"
                src="https://upload.wikimedia.org/wikipedia/commons/9/92/On-cloud-logo-white-background.svg"
                loading="lazy"
                alt="bissell"
                width="100"
                height=""
              />
              <img
                class="h-6 w-auto lg:h-10"
                src="https://docs.vuejs.id/images/vueschool.png"
                loading="lazy"
                alt="ge"
                width="100"
                height="100"
              />
              <img
                class="h-6 w-auto lg:h-10"
                src="https://www.pngall.com/wp-content/uploads/13/TikTok-Logo-PNG-Image-HD.png"
                loading="lazy"
                alt="lilly"
                width="100"
                height="100"
              />
              <img
                class="h-8 w-auto lg:h-14"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1024px-OpenAI_Logo.svg.png"
                loading="lazy"
                alt="microsoft"
                width="100"
                height=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative pt-32 md:pt-44" id="features">
      <div class="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
        <div class="mx-auto md:w-3/5">
          <h2
            class="text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"
          >
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
                <img
                  class="w-16"
                  src=""
                  alt="xp icon illustration"
                  width="512"
                  height="512"
                  loading="lazy"
                />
                <div class="mx-auto text-center sm:w-2/5">
                  <h2
                    class="text-xl font-semibold text-gray-900 dark:text-white"
                  >
                    Real case big industry project
                  </h2>
                  <p class="mt-3 text-gray-600 dark:text-gray-400">
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
                  <h2
                    class="text-xl font-semibold text-gray-900 dark:text-white"
                  >
                    Security first
                  </h2>
                  <p class="mt-3 text-gray-600 dark:text-gray-400">
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
                  <p class="mt-3 text-gray-600 dark:text-gray-400">
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
                  <p class="mt-3 text-gray-600 dark:text-gray-400">
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
                  <p class="mt-3 text-gray-600 dark:text-gray-400">
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
      <div class="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
        <div
          class="flex-row-reverse items-center justify-between space-y-12 text-gray-600 md:flex md:gap-6 lg:gap-12 lg:space-y-0"
        >
          <div class="relative ml-auto h-full md:w-1/2 chart test">
            <!-- <ChartBarIcon class="fill-white stroke-transparent" /> -->
          </div>

          <div class="md:w-1/2 lg:w-[47%]">
            <h2
              class="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"
            >
              Just focus on your skills, we'll take care the curicullum
            </h2>
            <p class="my-12 text-gray-600 dark:text-gray-300">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia. <br />
              <br />
              Vitae error, quaerat officia delectus voluptatibus explicabo quo
              pariatur impedit, at reprehenderit aliquam a ipsum quas
              voluptatem. Quo pariatur asperiores eum amet.
            </p>
            <div
              class="space-y-4 divide-y divide-gray-100 dark:divide-gray-800"
            >
              <div class="mt-8 flex gap-4 md:items-center">
                <div
                  class="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="m-auto h-6 w-6 text-gray-700 dark:text-gray-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    ></path>
                  </svg>
                </div>
                <div class="w-5/6">
                  <h3
                    class="text-lg font-semibold text-gray-700 dark:text-white"
                  >
                    Chat Your Mentor
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    Asperiores nemo possimus nesciunt quam mollitia.
                  </p>
                </div>
              </div>
              <div class="flex gap-4 pt-4 md:items-center">
                <div
                  class="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900"
                >
                  <!-- <RocketLaunchIcon
                    class="w-2/3 mx-auto stroke-1 stroke-gray-200"
                  /> -->
                </div>
                <div class="w-5/6">
                  <h3
                    class="text-lg font-semibold text-gray-700 dark:text-white"
                  >
                    Real Time Location
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    Asperiores nemo possimus nesciunt quam mollitia.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
