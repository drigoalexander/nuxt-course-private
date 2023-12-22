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
        :modelValue="isCompleted"
        @update:modelValue="toggleComplete"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
import CompleteLessonButton from "~/components/CompleteLessonButton.vue";
import { useCourseProgress } from "~/store/courseProgress";

const store = useCourseProgress();
const { initialize, toggleComplete } = store;

const user = useSupabaseUser();

console.log(user.value.email);
initialize();

definePageMeta({
  middleware: ["auth"],
});

const course = await useCourse();
const { params } = useRoute();
const lesson = await useLesson(params.chapterSession, params.lessonSlug);

const currentChapter = computed(() => {
  return course.value.data.chapters.find(
    (element) => element.slug == params.chapterSession
  );
});

const currentLesson = computed(() => {
  return currentChapter.value.lessons.find(
    (element) => element.slug == params.lessonSlug
  );
});

const isCompleted = computed(() => {
  return store.progress?.[params.chapterSession]?.[params.lessonSlug] || false;
});

useHead({
  title: `${currentLesson.value.title}`,
});
</script>
