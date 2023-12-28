<template>
  <div
    class="flex flex-col gap-10 items-center justify-center min-h-screen w-full bg-black"
  >
    <h3 class="text-white text-[5vw] -tracking-tight">Welcome,</h3>
    <div
      @click="signInWithOAuth"
      class="overflow-hidden bg-gradient-to-r from-[#1CD8D2] to-[#93EDC7] relative flex items-center gap-10 text-[7vw] duration-300 transition-all ease-in-out w-[60vw] cursor-pointer hover:w-[64vw] group rounded-full text-white"
    >
      <div
        class="flex h-full w-full items-center justify-center bg-black px-24 py-4 m-[4px] rounded-full"
      >
        <span class="text-white text-transparent bg-clip-text w-full">
          Git It Started</span
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-[7vw] absolute right-10 translate-y-[150%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-200 ease-in-out"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
    </div>
  </div>
  <div class=""></div>
</template>

<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const { query } = useRoute();

const signInWithOAuth = () => {
  supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      emailRedirectTo: `/confirm?${query.redirectTo}`,
    },
  });
};
</script>
