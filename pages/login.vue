<template>
  <div
    class="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 text-white mx-auto relative"
  >
    <div
      class="w-screen h-screen wrapper absolute z-0 top-0 left-0 bg-gradient-to-r from-jetYellow to-jetFuchsia via-jetPink"
      style="
         {
          grid-template-columns: repeat(var(--col), 1fr);
          grid-template-rows: repeat(var(--row), 1fr);
        }
      "
    >
      <div
        class="aspect-square w-[50px] bg-stone-950 tiles before:inset-4 before:content-[''] before:absolute"
        v-for="el in ComputedColumns * ComputedRows"
        :key="el"
      ></div>
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-sm relative z-20">
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 z-20 tracking-tight text-jetPink"
      >
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex flex-col gap-4">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
            <div class="text-sm">
              <a href="#" class="font-semibold text-jetPink"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-jetPink px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Sign in
          </button>
        </div>
      </form>

      <button
        type="button"
        @click="signInWithOAuth"
        class="py-2 px-4 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="mr-2"
          viewBox="0 0 1792 1792"
        >
          <path
            d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"
          ></path>
        </svg>
        Sign in with GitHub
      </button>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const { query } = useRoute();

watchEffect(async () => {
  if (user.value) {
    await navigateTo(query.redirectTo ?? "/", {
      replace: true,
    });
  }
});

const signInWithOAuth = () => {
  supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: query.redirectTo ?? "/",
    },
  });
};

const columns = ref(1);
const rows = ref(1);
const widthRec = ref(50);
const heightRec = ref(50);

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

const Total = computed(() => {
  return columns.value * rows.value;
});
</script>

<style>
.wrapper {
  display: grid;
  grid-template-columns: repeat(v-bind(ComputedColumns), 1fr);
  grid-template-rows: repeat(v-bind(ComputedRows), 1fr);
}
</style>
