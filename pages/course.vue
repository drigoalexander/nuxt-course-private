<script setup>
const route = useRoute();
const user = useSupabaseUser();
const course = await useCourse();
</script>

<template>
  <div class="flex flex-row sm:gap-10">
    <div class="sm:w-full sm:max-w-[18rem]">
      <input type="checkbox" id="sidebar-mobile-fixed" class="sidebar-state" />
      <label for="sidebar-mobile-fixed" class="sidebar-overlay"></label>
      <aside
        class="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full"
      >
        <section class="sidebar-title items-center p-4">
          <div class="flex flex-col">
            <NuxtLink to="/" class="text-4xl">NuxtInsight</NuxtLink>
          </div>
        </section>
        <section class="sidebar-content">
          <nav class="menu rounded-md">
            <section class="menu-section px-4">
              <span class="menu-title">Course menu</span>

              <ul class="menu-items gap-8">
                <li
                  class="menu-item flex flex-col items-start gap-3"
                  v-for="(el, idx) in course.data.chapters"
                  :key="idx"
                >
                  <div class="flex items-center gap-2">
                    <span>{{ el.title }} </span>
                  </div>
                  <ul class="w-full flex flex-col gap-3 list-disc">
                    <li
                      v-for="(element, index) in el.lessons"
                      :key="index"
                      :class="{
                        'text-gray-400': element.path !== $route.fullPath,
                        'text-transparent': element.path === $route.fullPath,
                        'bg-clip-text': element.path === $route.fullPath,
                        'bg-gradient-to-r': element.path === $route.fullPath,
                        'from-[#FCF84A]': element.path === $route.fullPath,
                        'via-[#FE2857]': element.path === $route.fullPath,
                        'to-[#6B57FF]': element.path === $route.fullPath,
                      }"
                    >
                      <NuxtLink :to="element.path">
                        {{ element.title }}
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
            <div class="divider my-0"></div>
          </nav>
        </section>
        <section class="sidebar-footer h-fit justify-end bg-gray-2 pt-2">
          <UserCard />
        </section>
      </aside>
    </div>
    <div class="flex w-full flex-col p-4">
      <div class="w-fit">
        <label for="sidebar-mobile-fixed" class="btn-primary btn sm:hidden"
          >Open Sidebar</label
        >
      </div>

      <div class="my-4 grid grid-cols-1 gap-4 h-screen w-full">
        <div
          class="flex h-full w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
        >
          <template v-if="user">
            <NuxtPage v-if="route.fullPath !== '/course'" />
            <span v-else>{{ course.data.title }}</span>
          </template>
          <LoginCard v-else />
        </div>
      </div>
    </div>
  </div>
</template>
