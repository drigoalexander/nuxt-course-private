<template>
  <div>
    <PageLoader :loginProcess="true" />
  </div>
</template>

<script setup lang="ts">
const { query } = useRoute();
const supabase = useSupabaseClient();
const user = useSupabaseUser();

watch(
  user,
  () => {
    if (user.value) {
      navigateTo(query.redirectTo as string, {
        replace: true,
      });
    }
  },
  { immediate: true }
);
</script>
