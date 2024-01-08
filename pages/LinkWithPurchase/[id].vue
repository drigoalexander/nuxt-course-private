<template>
  <div
    class="flex items-center justify-center w-full h-screen text-2xl leading-6 font-bold"
  >
    Redirecting...
  </div>
</template>

<script setup>
const user = useSupabaseUser();
const route = useRoute();

watchEffect(
  async () => {
    if (user.value) {
      await useFetch(`/api/user/linkWithPurchase/${route.params.id}`, {
        headers: useRequestHeaders(["cookie"]),
      });

      await redirect();
    }
  },
  {
    immediate: true,
  }
);

async function redirect() {
  await navigateTo("/", {
    replace: true,
  });
}
</script>
