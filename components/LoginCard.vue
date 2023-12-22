<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-header">Login to your account</h2>
      <p class="text-content2">Start your course in a glance</p>
      <div class="card-footer">
        <NuxtLink
          :to="`/login?redirectTo=${route.fullPath}`"
          class="btn-primary btn"
          >Login</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
</script>
