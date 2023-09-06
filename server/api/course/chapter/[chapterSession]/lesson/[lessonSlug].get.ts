import course from "~/server/courseData.js";
import { Lessons, Chapters, Course, LessonsWithPath } from "~/types/course";

course as Course;

export default defineEventHandler((event): LessonsWithPath => {
  const { chapterSession, lessonSlug } = event.context.params;

  const currentChapter: Maybe<Chapters> = course.chapters.find(
    (element) => element.slug === chapterSession
  );

  if (!currentChapter) {
    throw createError({
      statusCode: 404,
      message: "Chapter not found!",
    });
  }

  const currentLesson: Maybe<Lessons> = currentChapter.lessons.find(
    (element) => element.slug === lessonSlug
  );

  if (!currentLesson) {
    throw createError({
      statusCode: 404,
      message: "Lesson not found!",
    });
  }

  return {
    ...currentLesson,
    path: `course/chapters/${chapterSession}/lessons/${lessonSlug}`,
  };
});
