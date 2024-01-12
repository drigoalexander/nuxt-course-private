<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8 z-40 relative pointer-events-auto">
    <div
      class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none bg-gray-800/50 overflow-hidden"
    >
      <div class="p-8 sm:p-10 lg:flex-auto text-white">
        <h3 class="text-2xl font-bold tracking-tight">Lifetime membership</h3>
        <p class="mt-6 text-base leading-7">
          Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet
          indis perferendis blanditiis repellendus etur quidem assumenda.
        </p>
        <div class="mt-10 flex items-center gap-x-4">
          <h4 class="flex-none text-sm font-semibold leading-6 text-white">
            What’s included
          </h4>
        </div>
        <ul
          role="list"
          class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 sm:grid-cols-2 sm:gap-6"
        >
          <li class="flex gap-x-3">
            <svg
              class="h-6 w-5 flex-none text-[#050708]"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"
              />
            </svg>
            Access to all course
          </li>
          <li class="flex gap-x-3">
            <svg
              class="h-6 w-5 flex-none text-[#050708]"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"
              />
            </svg>
            Certificate of completion
          </li>
          <li class="flex gap-x-3">
            <svg
              class="h-6 w-5 flex-none text-[#050708]"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"
              />
            </svg>
            Access to all source code
          </li>
          <li class="flex gap-x-3">
            <svg
              class="h-6 w-5 flex-none text-[#050708]"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"
              />
            </svg>
            Access to all bootcamp
          </li>
        </ul>
      </div>
      <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <Transition>
          <div
            v-if="!successPayment"
            class="rounded-2xl bg-gray-500/10 text-white py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
          >
            <div class="mx-auto max-w-sm px-8">
              <p class="text-base font-semibold text-white">
                Pay once, own it forever
              </p>
              <p class="mt-6 flex items-baseline justify-center gap-x-2">
                <span class="text-5xl font-bold tracking-tight text-white"
                  >1000k</span
                >
                <span
                  class="text-sm font-semibold leading-6 tracking-wide text-white"
                  >Rupiah</span
                >
              </p>

              <div
                class="flex flex-col jusify-start gap-y-2 w-full items-start mt-6"
              >
                <input
                  v-model="userEmail"
                  type="email"
                  id="input-label"
                  class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Enter your email"
                />
              </div>
              <div
                @click="payCourse(userEmail)"
                class="mt-6 text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2 w-full cursor-pointer"
              >
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 55.42 59.793"
                  class="fill-white w-5 h-5 me-2 -ms-1"
                >
                  <path
                    class="cls-1"
                    d="M3.959,48.243A3.958,3.958,0,0,1,0,44.285v-28.8a3.959,3.959,0,1,1,7.917,0v28.8A3.958,3.958,0,0,1,3.959,48.243Z"
                  />
                  <path
                    class="cls-1"
                    d="M51.461,48.243A3.958,3.958,0,0,1,47.5,44.285V15.508a3.959,3.959,0,1,1,7.917,0V44.285A3.959,3.959,0,0,1,51.461,48.243Z"
                  />
                  <path
                    class="cls-1"
                    d="M27.71,59.793a3.96,3.96,0,0,1-3.959-3.959V3.959a3.959,3.959,0,1,1,7.917,0V55.834A3.959,3.959,0,0,1,27.71,59.793Z"
                  />
                </svg>
                <path
                  fill="white"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                ></path>

                Check out using Midtrans
              </div>
            </div>
          </div>
          <div
            v-else
            @click="login"
            class="font-extrabold gap-y-6 text-lg cursor-pointer rounded-2xl text-gray-800 bg-green-400 hover:bg-green-400/90 duration-300 ease-in-out h-full flex flex-col justify-center items-center py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            Login with github
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
let userEmail = ref();
let successPayment = ref(false);
let paymentID = ref("");
async function payCourse(email) {
  await $fetch("/api/midtrans/paymentIntent", {
    method: "POST",
    body: {
      title: "TypeScript with Vue.js 3",
      email: email,
    },
  }).then((res) => {
    paymentID.value = res.uuid;
    window.snap.pay(res.token, {
      onSuccess: function (result) {
        successPayment.value = true;
      },
    });
  });
}

async function login() {
  const redirect = `/LinkWithPurchase/${paymentID.value}`;
  navigateTo(`/login?redirectTo=${redirect}`);
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
