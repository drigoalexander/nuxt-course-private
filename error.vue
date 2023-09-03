<template>
  <div
    class="relative w-full h-[100vh] flex items-center justify-center mx-auto flex-col gap-10"
  >
    <template
      v-if="error.statusCode === 404"
      class="relative z-20 flex flex-col gap-10"
    >
      <h1 class="text-6xl font-bold">{{ error.statusCode }}</h1>
      <p class="text-xl font-semibold">{{ error.message }}</p>
      <button @click="errorClear" class="btn btn-solid-success">
        Return To Course
      </button>
    </template>
    <PageLoader />
  </div>
</template>

<script setup>
const { $anime } = useNuxtApp();

const error = useError();

function errorClear() {
  clearError({ redirect: "/course" });
}
</script>
