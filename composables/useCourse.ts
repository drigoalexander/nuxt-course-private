import courseData from "./courseData";
type Lessons = {
  title: String;
  slug: String;
  number: Number;
  downloadUrl: String;
  sourceUrl?: String;
  videoId: Number;
  text: String;
  path: String;
};

type Chapters = {
  title: String;
  slug: String;
  number: Number;
  lessons: Lessons[];
};

type Course = {
  title: String;
  chapters: Chapters[];
};

export const useCourse = (): Course => {
  const chapters: Chapters[] = courseData.chapters.map((chapter) => {
    const lessons: Lessons[] = chapter.lessons.map((lesson) => ({
      ...lesson,
      path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
    }));
    return {
      ...chapter,
      lessons,
    };
  });
  return {
    ...courseData,
    chapters,
  };
};
