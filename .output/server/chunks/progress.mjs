import { c as createError, d as defineEventHandler, a as assertMethod, r as readBody } from './nitro/node-server.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@supabase/supabase-js';

const protectRoutes = (event) => {
  if (!event.context.user) {
    throw createError({
      statusCode: 401,
      message: "Unauthorized"
    });
  }
};

const prisma = new PrismaClient();
const progress = defineEventHandler(async (event) => {
  assertMethod(event, ["PUT", "PATCH", "POST"]);
  protectRoutes(event);
  const { chapterSlug, lessonSlug } = event.context.params;
  const lesson = await prisma.lesson.findFirst({
    where: {
      slug: lessonSlug,
      Chapter: {
        slug: chapterSlug
      }
    }
  });
  if (!lesson) {
    throw createError({
      statusCode: 404,
      statusMessage: "Lesson Not Found"
    });
  }
  const { completed, userEmail } = await readBody(event);
  return prisma.lessonProgress.upsert({
    where: {
      lessonId_userEmail: {
        lessonId: lesson.id,
        userEmail
      }
    },
    update: {
      progress: completed
    },
    create: {
      progress: completed,
      userEmail,
      Lesson: {
        connect: {
          id: lesson.id
        }
      }
    }
  });
});

export { progress as default };
//# sourceMappingURL=progress.mjs.map
