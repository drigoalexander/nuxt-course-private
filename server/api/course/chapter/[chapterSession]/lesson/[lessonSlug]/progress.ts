import { PrismaClient } from "@prisma/client";
import protectRoutes from "~/server/utils/protectRoutes";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  assertMethod(event, ["PUT", "PATCH", "POST"]);
  protectRoutes(event);
  const { chapterSlug, lessonSlug } = event.context.params;
  const lesson = await prisma.lesson.findFirst({
    where: {
      slug: lessonSlug,
      Chapter: {
        slug: chapterSlug,
      },
    },
  });

  if (!lesson) {
    throw createError({
      statusCode: 404,
      statusMessage: "Lesson Not Found",
    });
  }
  const { completed, userEmail } = await readBody(event);

  return prisma.lessonProgress.upsert({
    where: {
      lessonId_userEmail: {
        lessonId: lesson.id,
        userEmail: userEmail,
      },
    },
    update: {
      progress: completed,
    },
    create: {
      progress: completed,
      userEmail,
      Lesson: {
        connect: {
          id: lesson.id,
        },
      },
    },
  });
});
