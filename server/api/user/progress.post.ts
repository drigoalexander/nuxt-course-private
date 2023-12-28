import { PrismaClient } from "@prisma/client";
// import protectRoute from '~/server/utils/protectRoute';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  assertMethod(event, ["POST"]);
  const { userEmail } = await readBody(event);
  const userProgress = await prisma.lessonProgress.findMany({
    where: {
      userEmail: userEmail,
      Lesson: {
        Chapter: {
          Course: {
            id: "45c27113-cec6-4aea-9c1c-2e39d5eb0d14",
          },
        },
      },
    },
    select: {
      progress: true,
      Lesson: {
        select: {
          slug: true,
          Chapter: {
            select: {
              slug: true,
            },
          },
        },
      },
    },
  });
  const courseOutline = await $fetch("/api/course/meta");

  if (!courseOutline) {
    throw createError({
      statusCode: 404,
      statusMessage: "Course outline not found",
    });
  }

  const progress = courseOutline.chapters.reduce(
    (courseProgress: any, chapter: any) => {
      courseProgress[chapter.slug] = chapter.lessons.reduce(
        (chapterProgress: any, lesson: any) => {
          chapterProgress[lesson.slug] =
            userProgress.find(
              (progress) =>
                progress.Lesson.slug === lesson.slug &&
                progress.Lesson.Chapter.slug === chapter.slug
            )?.progress || false;

          return chapterProgress;
        },
        {}
      );

      return courseProgress;
    },
    {}
  );

  return progress;
});
