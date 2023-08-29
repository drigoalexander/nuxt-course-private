<template>
  <div class="w-3/4 mx-auto h-3/4 my-auto gap-6 flex flex-col">
    <h4 class="text-xl font-semibold">
      {{ route.params.chapterSession }} - Lesson {{ currentLesson.number }}
    </h4>
    <h1 class="text-4xl font-bold">{{ currentLesson.title }}</h1>

    <VideoPlayer :videoID="currentLesson.videoId" />

    <p>{{ currentLesson.text }}</p>
  </div>
</template>

<script setup>
const course = useCourse();
const route = useRoute();

const currentChapter = computed(() => {
  return course.chapters.find(
    (element) =>
      element.title == route.params.chapterSession &&
      element.lessons.find((lesson) => lesson.slug == route.params.lessonSlug)
  );
});

const currentLesson = computed(() => {
  return currentChapter.value.lessons.find(
    (element) => element.slug == route.params.lessonSlug
  );
});

useHead({
  title: `${currentLesson.value.title}`,
});
</script>
