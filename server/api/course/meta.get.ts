import { PrismaClient } from "@prisma/client";
import {
  ChapterMeta,
  LessonsMetaWithPath,
  Course,
  CourseMeta,
} from "~/types/course";

const prisma = new PrismaClient();

export default defineEventHandler(
  async (event) =>
    await prisma.course.findFirst({
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
    })
);
