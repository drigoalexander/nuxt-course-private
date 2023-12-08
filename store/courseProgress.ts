import { defineStore } from "pinia";

export const courseProgress = defineStore("courseProgress", () => {
  const progress = useLocalStorage<{
    [key: string]: { [key: string]: boolean };
  }>("progress", {});
  const initialized = ref(false);

  function initializer() {
    if (initialized.value) return;
    initialized.value = true;
  }

  const toggleComplete = async (chapter: string, lesson: string) => {
    const user = useSupabaseUser();
    if (!user.value) return;

    if (!chapter || !lesson) {
      const {
        params: { chapterSlug, lessonSlug },
      } = useRoute();
      chapter = chapterSlug as string;
      lesson = lessonSlug as string;
    }

    const currentProgress = progress.value[chapter]?.[lesson];
    progress.value[chapter] = {
      ...(progress.value[chapter] ?? {}),
      [lesson]: !currentProgress,
    };

    return {
      initializer,
      progress,
      toggleComplete,
    };
  };
});
