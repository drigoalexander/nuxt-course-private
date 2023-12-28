import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { chapterSession, lessonSlug } = event.context.params;

  const lesson = await prisma.lesson.findFirst({
    where: {
      slug: lessonSlug,
      Chapter: {
        slug: chapterSession,
      },
    },
  });

  return {
    ...lesson,
    path: `course/chapter/${chapterSession}/lesson/${lessonSlug}`,
  };
});
