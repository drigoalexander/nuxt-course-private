import { d as defineEventHandler, a as assertMethod, r as readBody, c as createError } from './nitro/node-server.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@supabase/supabase-js';

const prisma = new PrismaClient();
const progress_post = defineEventHandler(async (event) => {
  assertMethod(event, ["POST"]);
  const { userEmail } = await readBody(event);
  const userProgress = await prisma.lessonProgress.findMany({
    where: {
      userEmail,
      Lesson: {
        Chapter: {
          Course: {
            id: "45c27113-cec6-4aea-9c1c-2e39d5eb0d14"
          }
        }
      }
    },
    select: {
      progress: true,
      Lesson: {
        select: {
          slug: true,
          Chapter: {
            select: {
              slug: true
            }
          }
        }
      }
    }
  });
  const courseOutline = await $fetch("/api/course/meta");
  if (!courseOutline) {
    throw createError({
      statusCode: 404,
      statusMessage: "Course outline not found"
    });
  }
  const progress = courseOutline.chapters.reduce(
    (courseProgress, chapter) => {
      courseProgress[chapter.slug] = chapter.lessons.reduce(
        (chapterProgress, lesson) => {
          var _a;
          chapterProgress[lesson.slug] = ((_a = userProgress.find(
            (progress2) => progress2.Lesson.slug === lesson.slug && progress2.Lesson.Chapter.slug === chapter.slug
          )) == null ? void 0 : _a.progress) || false;
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

export { progress_post as default };
//# sourceMappingURL=progress.post.mjs.map
