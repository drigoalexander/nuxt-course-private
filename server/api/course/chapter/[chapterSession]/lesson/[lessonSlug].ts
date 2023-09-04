import course from "~/server/courseData.js";

export default defineEventHandler((event) => {
  const { chapterSession, lessonSlug } = event.context.params;

  const currentChapter = course.chapters.find(
    (element) => element.slug === chapterSession
  );

  if (!currentChapter) {
    throw createError({
      statusCode: 404,
      message: "Chapter not found!",
    });
  }

  const currentLesson = currentChapter.lessons.find(
    (element) => element.slug === lessonSlug
  );

  if (!currentLesson) {
    return createError({
      statusCode: 404,
      message: "Lesson not found!",
    });
  }

  return { currentLesson, currentChapter };
});
