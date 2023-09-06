<template>
  <div class="w-3/4 mx-auto h-3/4 my-auto gap-6 flex flex-col">
    <h4 class="text-xl font-semibold">
      Chapter {{ currentChapter.number }} - Lesson {{ lesson.data.number }}
    </h4>
    <h1 class="text-4xl font-bold">{{ lesson.data.title }}</h1>

    <VideoPlayer :videoID="lesson.data.videoId" />

    <p>{{ lesson.data.text }}</p>
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

definePageMeta({
  middleware: ["auth"],
});

const course = await useCourse();
const route = useRoute();
const lesson = await useLesson(
  route.params.chapterSession,
  route.params.lessonSlug
);

const currentChapter = computed(() => {
  return course.value.data.chapters.find(
    (element) => element.slug == route.params.chapterSession
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
