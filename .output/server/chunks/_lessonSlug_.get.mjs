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
const _lessonSlug__get = defineEventHandler(async (event) => {
  const { chapterSession, lessonSlug } = event.context.params;
  const lesson = await prisma.lesson.findFirst({
    where: {
      slug: lessonSlug,
      Chapter: {
        slug: chapterSession
      }
    }
  });
  return {
    ...lesson,
    path: `course/chapter/${chapterSession}/lesson/${lessonSlug}`
  };
});

export { _lessonSlug__get as default };
//# sourceMappingURL=_lessonSlug_.get.mjs.map
