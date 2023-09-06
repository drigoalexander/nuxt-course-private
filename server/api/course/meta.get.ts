import {
  ChapterMeta,
  LessonsMetaWithPath,
  Course,
  CourseMeta,
} from "~/types/course";
import course from "~/server/courseData";
course as Course;
export default defineEventHandler((event): CourseMeta => {
  const chapters: ChapterMeta[] = course.chapters.map((chapter) => {
    const lessons: LessonsMetaWithPath[] = chapter.lessons.map((lesson) => ({
      title: lesson.title,
      slug: lesson.slug,
      number: lesson.number,
      path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
    }));
    return {
      title: chapter.title,
      slug: chapter.slug,
      number: chapter.number,
      lessons: lessons,
    };
  });

  return { ...course, chapters };
});
