// import course from "~/server/courseData.js";
import { PrismaClient } from "@prisma/client";

// import { Lessons, Chapters, Course, LessonsWithPath } from "~/types/course";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { chapterSession, lessonSlug } = event.context.params;

  // if (chapterSession !== "1-chapter-1") {
  //   protectRoute(event);
  // }

  const lesson = await prisma.lesson.findFirst({
    where: {
      slug: lessonSlug,
      Chapter: {
        slug: chapterSession,
      },
    },
  });
  // const currentChapter: Maybe<Chapters> = course.chapters.find(
  //   (element) => element.slug === chapterSession
  // );

  // if (!currentChapter) {
  //   throw createError({
  //     statusCode: 404,
  //     message: "Chapter not found!",
  //   });
  // }

  // const currentLesson: Maybe<Lessons> = currentChapter.lessons.find(
  //   (element) => element.slug === lessonSlug
  // );

  // if (!currentLesson) {
  //   throw createError({
  //     statusCode: 404,
  //     message: "Lesson not found!",
  //   });
  // }

  return {
    ...lesson,
    path: `course/chapter/${chapterSession}/lesson/${lessonSlug}`,
  };
});
