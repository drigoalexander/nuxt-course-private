<script lang="ts" setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const name = computed(() => {
  return user.value?.user_metadata.full_name;
});

const avatar = computed(() => {
  return user.value?.user_metadata.avatar_url;
});

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  await navigateTo("/");
};
</script>

<template>
  <div
    v-if="user"
    class="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4"
  >
    <label
      class="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4"
      tabindex="0"
    >
      <div class="flex flex-row gap-4 p-4">
        <div class="avatar avatar-md">
          <img :src="avatar" alt="avatar" />
        </div>

        <div class="flex flex-col">
          <span>Welcome Back,</span>
          <span class="text-xs font-normal text-content2">{{ name }}</span>
        </div>
      </div>
    </label>
    <div class="dropdown-menu dropdown-menu-right-top ml-2">
      <button @click="signOut" tabindex="-1" class="dropdown-item text-sm">
        Log out
      </button>
    </div>
  </div>
</template>

<style scoped></style>
