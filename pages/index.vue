<script setup>
const user = useSupabaseUser();
</script>

<template>
  <main class="mb-40">
    <div
      class="relative overflow-hidden dark:bg-darker lg:overflow-auto"
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
                    class="cursor-pointer before:bg-primary astro-Z4ZYBUMP"
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
                  class="h-60 bg-gradient-to-br from-primary to-purple-400 blur-3xl dark:from-blue-700"
                ></div>
                <div
                  class="h-72 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-indigo-600"
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
    <!-- <div class="pt-32 md:pt-44" id="solution">
      <div class="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
        <div
          class="flex-row-reverse items-center justify-between space-y-12 text-gray-600 md:flex md:gap-6 lg:gap-12 lg:space-y-0"
        >
          <div class="relative ml-auto h-full md:w-1/2">
            <img
              class="dark:hidden"
              src="./images/milestone.webp"
              alt="app milestone"
              width="1174"
              height="1134"
            />
            <img
              class="hidden dark:block"
              src="./images/milestone-dark.webp"
              alt="app milestone"
              width="1174"
              height="1134"
            />
          </div> -->

    <!-- <div class="md:w-1/2 lg:w-[47%]">
            <h2
              class="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"
            >
              Just focus on your business startegy
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
                    Chat Anytime
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
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    ></path>
                  </svg>
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
          </div> -->
    <!-- </div> -->
    <!-- <div class="my-20 md:my-32">
          <h3
            class="text-2xl font-bold text-gray-900 dark:text-white md:w-2/3 md:text-3xl lg:text-4xl"
          >
            Customize your customer experience, Go beyond with our top products
          </h3>
          <div class="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div
              class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker"
            >
              <div
                class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900"
              >
                <img
                  class="w-10"
                  src="./images/security.webp"
                  alt="safety icon illustration"
                  height="512"
                  width="512"
                />
                <div>
                  <h4
                    class="text-xl font-semibold text-gray-900 dark:text-white"
                  >
                    Safelus
                  </h4>
                  <p class="mt-3 text-gray-600 dark:text-gray-400">
                    Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                    nobis dicta.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker"
            >
              <div
                class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900"
              >
                <img
                  class="w-10"
                  src="./images/card.webp"
                  alt="payment card icon illustration"
                  height="512"
                  width="512"
                />
                <div>
                  <h4
                    class="text-xl font-semibold text-gray-900 dark:text-white"
                  >
                    Paylus
                  </h4>
                  <p class="mt-3 text-gray-600 dark:text-gray-400">
                    Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                    nobis dicta.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker"
            >
              <div
                class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900"
              >
                <img
                  class="w-10"
                  src="./images/xp.webp"
                  alt="xp icon illustration"
                  height="512"
                  width="512"
                />
                <div>
                  <h4
                    class="text-xl font-semibold text-gray-900 dark:text-white"
                  >
                    TL Certification
                  </h4>
                  <p class="mt-3 text-gray-600 dark:text-gray-400">
                    Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                    nobis dicta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> -->
    <!-- <div
          class="mx-auto flex flex-col items-center gap-6 sm:w-4/5 md:w-full md:flex-row lg:gap-12"
        >
          <div class="relative md:w-1/2">
            <div
              aria-hidden="true"
              class="absolute inset-0 m-auto grid h-3/5 w-3/5 grid-cols-2 -space-x-52 opacity-40 dark:opacity-60"
            >
              <div
                class="h-full rounded-full bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"
              ></div>
              <div
                class="h-full bg-gradient-to-r from-cyan-400 to-primary blur-[106px] dark:to-indigo-600"
              ></div>
            </div>
            <img
              class="relative dark:hidden"
              src="./images/illus.webp"
              alt="stats illustration"
              width="1746"
              height="1746"
            />
            <img
              class="relative hidden dark:block"
              src="./images/illus-dark.webp"
              alt="stats illustration"
              width="1746"
              height="1746"
            />
          </div>
          <div class="ml-auto h-full md:w-1/2">
            <h3
              class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl lg:text-4xl"
            >
              Go beyond with our top products
            </h3>
            <p class="my-12 text-gray-600 dark:text-gray-300">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat ?
              Asperiores nemo possimus nesciunt dicta veniam aspernatur quam
              mollitia. <br />
              <br />
              Vitae error, quaerat officia delectus voluptatibus explicabo quo
              pariatur impedit, at reprehenderit aliquam a ipsum quas
              voluptatem. Quo pariatur asperiores eum amet.
            </p>
            <a href="/register" class="before:bg-primary astro-Z4ZYBUMP"
              ><span class="text-white astro-Z4ZYBUMP"> Get started </span></a
            >
          </div>
        </div> -->
    <!-- </div>
    </div> -->
    <!-- <div class="pt-32 text-gray-600 dark:text-gray-300 md:pt-20" id="reviews">
      <div class="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
        <div class="mx-auto md:w-3/5">
          <h2
            class="text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"
          >
            Trusted by thousands
          </h2>
          <p class="mt-4 text-center text-gray-600 dark:text-gray-300">
            Repellendus atque illum odio! Fugiat at expedita deserunt dolorum
            molestias.
          </p>
        </div>
        <div class="mt-12 grid gap-6 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          <div class="space-y-6">
            <div
              class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker"
            >
              <div
                class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900"
              >
                <div class="flex gap-4">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="./images/avatars/avatar.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3
                      class="text-lg font-medium text-gray-700 dark:text-white"
                    >
                      Daniella Doe
                    </h3>
                    <p class="text-sm text-gray-500 dark:text-gray-300">
                      Mobile dev
                    </p>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  aliquid quo eum quae quos illo earum ipsa doloribus nostrum
                  minus libero aspernatur laborum cum, a suscipit, ratione ea
                  totam ullam! Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Architecto laboriosam deleniti aperiam ab
                  veniam sint non cumque quis tempore cupiditate. Sint libero
                  voluptas veniam at reprehenderit, veritatis harum et rerum.
                </p>
              </div>
            </div>
            <div
              class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker"
            >
              <div
                class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900"
              >
                <div class="flex gap-4">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="./images/avatars/avatar-1.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3
                      class="text-lg font-medium text-gray-700 dark:text-white"
                    >
                      Daniella Doe
                    </h3>
                    <p class="text-sm text-gray-500 dark:text-gray-300">
                      @hundler
                    </p>
                  </div>
                </div>
                <p>
                  Illum aliquid quo eum quae quos illo laboriosam deleniti
                  aperiam ab veniam sint non cumque quis tempore cupiditate.
                  Sint libero voluptas veniam at reprehenderit, veritatis harum
                  et rerum.
                </p>
              </div>
            </div>
          </div>
          <div class="space-y-6">
            <div
              class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker"
            >
              <div
                class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900"
              >
                <div class="flex gap-4">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="./images/avatars/avatar-1.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3
                      class="text-lg font-medium text-gray-700 dark:text-white"
                    >
                      Daniella Doe
                    </h3>
                    <p class="text-sm text-gray-500 dark:text-gray-300">
                      Mobile dev
                    </p>
                  </div>
                </div>
                <p>
                  Nostrum minus libero sit amet consectetur, adipisicing elit ab
                  veniam sint non cumque quis tempore cupiditate. Sint libero
                  voluptas veniam at reprehenderit, veritatis harum et rerum.
                </p>
              </div>
            </div>
            <div
              class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker"
            >
              <div
                class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900"
              >
                <div class="flex gap-4">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="./images/avatars/avatar-3.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3
                      class="text-lg font-medium text-gray-700 dark:text-white"
                    >
                      Daniella Doe
                    </h3>
                    <p class="text-sm text-gray-500 dark:text-gray-300">
                      Mobile dev
                    </p>
                  </div>
                </div>
                <p>
                  Nostrum minus libero sit amet consectetur, adipisicing elit ab
                  veniam sint non cumque quis tempore cupiditate. Sint libero
                  voluptas veniam at reprehenderit, veritatis harum et rerum.
                </p>
              </div>
            </div>
            <div
              class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker"
            >
              <div
                class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900"
              >
                <div class="flex gap-4">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="./images/avatars/avatar-2.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3
                      class="text-lg font-medium text-gray-700 dark:text-white"
                    >
                      Daniella Doe
                    </h3>
                    <p class="text-sm text-gray-500 dark:text-gray-300">
                      @hundler
                    </p>
                  </div>
                </div>
                <p>
                  Illum aliquid quo eum quae quos illo laboriosam deleniti
                  aperiam ab veniam sint non cumque quis tempore cupiditate.
                  Sint libero voluptas veniam at reprehenderit, veritatis harum
                  et rerum.
                </p>
              </div>
            </div>
          </div>
          <div class="space-y-6 sm:hidden lg:block">
            <div
              class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker"
            >
              <div
                class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900"
              >
                <div class="flex gap-4">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="./images/avatars/avatar.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3
                      class="text-lg font-medium text-gray-700 dark:text-white"
                    >
                      Daniella Doe
                    </h3>
                    <p class="text-sm text-gray-500 dark:text-gray-300">
                      Mobile dev
                    </p>
                  </div>
                </div>
                <p>
                  Architecto laboriosam. Sint libero voluptas veniam at
                  reprehenderit, veritatis harum et rerum.
                </p>
              </div>
            </div>
            <div
              class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker"
            >
              <div
                class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900"
              >
                <div class="flex gap-4">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="./images/avatars/avatar-4.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3
                      class="text-lg font-medium text-gray-700 dark:text-white"
                    >
                      Daniella Doe
                    </h3>
                    <p class="text-sm text-gray-500 dark:text-gray-300">
                      @hundler
                    </p>
                  </div>
                </div>
                <p>
                  Illum aliquid quo deleniti aperiam ab veniam sint non cumque
                  quis tempore cupiditate. Sint libero voluptas veniam at
                  reprehenderit, veritatis harum et rerum.
                </p>
              </div>
            </div>
            <div
              class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker"
            >
              <div
                class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900"
              >
                <div class="flex gap-4">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="./images/avatars/avatar.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3
                      class="text-lg font-medium text-gray-700 dark:text-white"
                    >
                      Daniella Doe
                    </h3>
                    <p class="text-sm text-gray-500 dark:text-gray-300">
                      @hundler
                    </p>
                  </div>
                </div>
                <p>
                  Illum aliquid quo deleniti aperiam ab veniam Sint libero
                  voluptas veniam at reprehenderit, veritatis harum et rerum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="relative pt-32 md:pt-44" id="pricing">
      <div
        aria-hidden="true"
        class="absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40 dark:opacity-80"
      >
        <div
          class="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"
        ></div>
        <div
          class="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"
        ></div>
      </div>
      <div class="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
        <div class="m-auto text-center lg:w-8/12 xl:w-7/12">
          <h2
            class="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"
          >
            Start managing your company smarter today
          </h2>
        </div>
        <div class="mt-12 md:mt-20">
          <div
            class="relative rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/20 transition duration-500 dark:border-white/10 dark:bg-gray-900 dark:shadow-none"
          >
            <div
              class="flex flex-col gap-12 divide-y p-12 dark:divide-gray-800 md:flex-row md:divide-y-0 md:divide-x"
            >
              <div class="text-center md:w-5/12">
                <h3 class="text-3xl font-bold text-gray-900 dark:text-white">
                  Suite Enterprise
                </h3>
                <p class="text-lg text-gray-600 dark:text-gray-300">
                  For your company of any size
                </p>
                <span
                  class="mb-6 mt-12 inline-block text-6xl font-bold text-gray-900 dark:text-white"
                  ><span class="text-4xl text-primary dark:text-gray-200"
                    >$</span
                  >234</span
                >

                <div class="flex justify-center">
                  <a
                    href="/register"
                    class="before:bg-primary astro-Z4ZYBUMP"
                    type="button"
                    ><span class="text-white astro-Z4ZYBUMP">
                      Get started
                    </span></a
                  >
                </div>

                <p class="mt-12 text-sm text-gray-500 dark:text-gray-400">
                  Includes : Security, Unlimited Storage, Payment, Search
                  engine, and all features
                </p>
              </div>
              <div class="relative md:w-7/12 md:pl-12">
                <ul
                  role="list"
                  class="space-y-4 py-6 text-gray-600 dark:text-gray-300"
                >
                  <li class="space-x-2">
                    <span class="font-semibold text-primary dark:text-gray-300"
                      >✓</span
                    >
                    <span>First premium advantage</span>
                  </li>
                  <li class="space-x-2">
                    <span class="font-semibold text-primary dark:text-gray-300"
                      >✓</span
                    >
                    <span>Second advantage weekly</span>
                  </li>
                  <li class="space-x-2">
                    <span class="font-semibold text-primary dark:text-gray-300"
                      >✓</span
                    >
                    <span>Third advantage donate to project</span>
                  </li>
                  <li class="space-x-2">
                    <span class="font-semibold text-primary dark:text-gray-300"
                      >✓</span
                    >
                    <span>Fourth, access to all components weekly</span>
                  </li>
                </ul>
                <p class="text-gray-700 dark:text-white">
                  Team can be any size, and you can add or switch members as
                  needed. Companies using our platform include:
                </p>
                <div
                  class="mt-12 flex flex-wrap items-center justify-between gap-6 grayscale"
                >
                  <img
                    class="h-8 w-auto lg:h-12"
                    src="images/clients/airbnb.svg"
                    width="100"
                    alt="airbnb"
                  />
                  <img
                    class="h-6 w-auto lg:h-8"
                    src="images/clients/netflix.svg"
                    width="100"
                    alt="bissell"
                  />
                  <img
                    class="h-8 w-auto lg:h-10"
                    src="images/clients/ge.svg"
                    width="100"
                    height="100"
                    alt="ge"
                  />
                  <img
                    class="ww-auto h-8 lg:h-12"
                    src="images/clients/microsoft.svg"
                    width="100"
                    alt="microsoft"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-20 flex flex-col gap-12 md:mt-32 lg:flex-row">
          <div class="text-center lg:w-5/12 lg:pl-12 lg:text-left">
            <h2
              class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl lg:text-4xl"
            >
              Frequently Asqued Questions
            </h2>
            <p class="mt-4 text-gray-600 dark:text-gray-300">
              piente optio repellendus atque illum odio! Fugiat at expedita
              deserunt dolorum molestias.
            </p>
          </div>
          <div
            class="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800 lg:w-7/12"
          >
            <div>
              <dl class="faq mx-auto max-w-2xl">
                <dt class="text-lg">
                  <button
                    type="button"
                    class="flex w-full items-start justify-between py-6 text-left text-gray-400"
                    aria-controls="faq-1"
                    data-active="false"
                  >
                    <span class="font-medium text-gray-900 dark:text-white">
                      How to customize the template ?
                    </span>
                    <span class="ml-6 flex h-7 items-center">
                      <svg
                        class="arrow-down h-6 w-6 rotate-0 transform duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out"
                  id="faq-1"
                >
                  <p class="pb-6 text-base text-gray-600 dark:text-gray-400">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum quod pariatur possimus at fugit natus aspernatur
                    molestiae. Velit, odio modi provident necessitatibus
                    molestias qui voluptatibus similique magnam a nam rem!
                  </p>
                </dd>
              </dl>
            </div>
            <div>
              <dl class="faq mx-auto max-w-2xl">
                <dt class="text-lg">
                  <button
                    type="button"
                    class="flex w-full items-start justify-between py-6 text-left text-gray-400"
                    aria-controls="faq-2"
                    data-active="false"
                  >
                    <span class="font-medium text-gray-900 dark:text-white">
                      How many times can I use the template ?
                    </span>
                    <span class="ml-6 flex h-7 items-center">
                      <svg
                        class="arrow-down h-6 w-6 rotate-0 transform duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out"
                  id="faq-2"
                >
                  <div class="pb-6 text-base text-gray-600 dark:text-gray-400">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Laborum quod pariatur possimus at fugit natus aspernatur
                      molestiae. Velit, odio modi provident necessitatibus
                      molestias qui voluptatibus similique magnam a nam rem!
                    </p>
                    <ul class="mt-4 list-outside list-disc pl-4">
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                    </ul>
                  </div>
                </dd>
              </dl>
            </div>
            <div>
              <dl class="faq mx-auto max-w-2xl">
                <dt class="text-lg">
                  <button
                    type="button"
                    class="flex w-full items-start justify-between py-6 text-left text-gray-400"
                    aria-controls="faq-3"
                    data-active="false"
                  >
                    <span class="font-medium text-gray-900 dark:text-white">
                      How to customize the template ?
                    </span>
                    <span class="ml-6 flex h-7 items-center">
                      <svg
                        class="arrow-down h-6 w-6 rotate-0 transform duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out"
                  id="faq-3"
                >
                  <p class="pb-6 text-base text-gray-600 dark:text-gray-400">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum quod pariatur possimus at fugit natus aspernatur
                    molestiae. Velit, odio modi provident necessitatibus
                    molestias qui voluptatibus similique magnam a nam rem!
                  </p>
                </dd>
              </dl>
            </div>
            <div>
              <dl class="faq mx-auto max-w-2xl">
                <dt class="text-lg">
                  <button
                    type="button"
                    class="flex w-full items-start justify-between py-6 text-left text-gray-400"
                    aria-controls="faq-4"
                    data-active="false"
                  >
                    <span class="font-medium text-gray-900 dark:text-white">
                      How to customize the template ?
                    </span>
                    <span class="ml-6 flex h-7 items-center">
                      <svg
                        class="arrow-down h-6 w-6 rotate-0 transform duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out"
                  id="faq-4"
                >
                  <p class="pb-6 text-base text-gray-600 dark:text-gray-400">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum quod pariatur possimus at fugit natus aspernatur
                    molestiae. Velit, odio modi provident necessitatibus
                    molestias qui voluptatibus similique magnam a nam rem!
                  </p>
                </dd>
              </dl>
            </div>
            <div>
              <dl class="faq mx-auto max-w-2xl">
                <dt class="text-lg">
                  <button
                    type="button"
                    class="flex w-full items-start justify-between py-6 text-left text-gray-400"
                    aria-controls="faq-5"
                    data-active="false"
                  >
                    <span class="font-medium text-gray-900 dark:text-white">
                      How to customize the template ?
                    </span>
                    <span class="ml-6 flex h-7 items-center">
                      <svg
                        class="arrow-down h-6 w-6 rotate-0 transform duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out"
                  id="faq-5"
                >
                  <p class="pb-6 text-base text-gray-600 dark:text-gray-400">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum quod pariatur possimus at fugit natus aspernatur
                    molestiae. Velit, odio modi provident necessitatibus
                    molestias qui voluptatibus similique magnam a nam rem!
                  </p>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </main>
</template>
