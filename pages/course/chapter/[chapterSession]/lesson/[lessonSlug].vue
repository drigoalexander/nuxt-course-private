<template>
  <div class="w-3/4 mx-auto h-3/4 my-auto gap-6 flex flex-col">
    <h4 class="text-xl font-semibold">
      {{ route.params.chapterSession }} - Lesson {{ currentLesson.number }}
    </h4>
    <h1 class="text-4xl font-bold">{{ currentLesson.title }}</h1>

    <VideoPlayer :videoID="currentLesson.videoId" />

    <p>{{ currentLesson.text }}</p>
    <ClientOnly>
      <CompleteLessonButton
        :modelValue="LessonComplete"
        @update:modelValue="CheckLessonComplete"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
import { useLocalStorage } from "@vueuse/core";
import CompleteLessonButton from "~/components/CompleteLessonButton.vue";

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
// const lessonValue = ref();

const progress = useLocalStorage("progress", []);

const LessonComplete = computed(() => {
  if (!progress.value[currentChapter.value.number - 1]) {
    return false;
  }
  if (
    !progress.value[currentChapter.value.number - 1][
      currentLesson.value.number - 1
    ]
  ) {
    return false;
  }

  return progress.value[currentChapter.value.number - 1][
    currentLesson.value.number - 1
  ];
});

const CheckLessonComplete = () => {
  if (!progress.value[currentChapter.value.number - 1]) {
    progress.value[currentChapter.value.number - 1] = [];
  }
  progress.value[currentChapter.value.number - 1][
    currentLesson.value.number - 1
  ] = !LessonComplete.value;
};
</script>
