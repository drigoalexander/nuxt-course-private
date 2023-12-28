import { defineStore } from "pinia";
import type { CourseProgress } from "~/types/course";

export const useCourseProgress = defineStore("courseProgress", () => {
  const user = useSupabaseUser();
  const progress = ref<any>({});
  const initialized = ref(false);

  async function initialize() {
    if (initialized.value) return;
    initialized.value = true;

    const lessonProgress = await $fetch("/api/user/progress", {
      method: "POST",
      body: {
        userEmail: user.value?.email,
      },
    });

    progress.value = lessonProgress;
  }
  const toggleComplete = async (chapter: string, lesson: string) => {
    if (!user.value) return;
    if (!chapter || !lesson) {
      const {
        params: { chapterSession, lessonSlug },
      } = useRoute();
      chapter = chapterSession as string;
      lesson = lessonSlug as string;
    }
    const currentProgress = progress.value[chapter]?.[lesson];
    progress.value[chapter] = {
      ...progress.value[chapter],
      [lesson]: !currentProgress,
    };
    try {
      await $fetch(`/api/course/chapter/${chapter}/lesson/${lesson}/progress`, {
        method: "POST",
        body: {
          completed: !currentProgress,
          userEmail: user.value.email,
        },
      });
    } catch (error) {
      console.error(error);
      progress.value[chapter] = {
        ...progress.value[chapter],
        [lesson]: currentProgress,
      };
    }
  };

  return {
    initialize,
    progress,
    toggleComplete,
  };
});
