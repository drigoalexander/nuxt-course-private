import { d as defineEventHandler } from './nitro/node-server.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@supabase/supabase-js';

const prisma = new PrismaClient();
const meta_get = defineEventHandler(async (event) => {
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
              slug: true
            }
          }
        }
      }
    }
  });
  return {
    ...course,
    chapters: course == null ? void 0 : course.chapters.map((chapter) => ({
      ...chapter,
      lessons: chapter.lessons.map((lesson) => ({
        ...lesson,
        path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`
      }))
    }))
  };
});

export { meta_get as default };
//# sourceMappingURL=meta.get.mjs.map
