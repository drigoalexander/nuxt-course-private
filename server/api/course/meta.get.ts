import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const course = await prisma.course.findFirst({
    select: {
      title: true,
      chapters: {
        select: {
          id: true,
          title: true,
          number: true,
          slug: true,
          lessons: {
            select: {
              id: true,
              title: true,
              number: true,
              slug: true,
            },
          },
        },
      },
    },
  });

  return {
    ...course,
    chapters: course?.chapters.map((chapter) => ({
      ...chapter,
      lessons: chapter.lessons.map((lesson) => ({
        ...lesson,
        path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
      })),
    })),
  };
});
