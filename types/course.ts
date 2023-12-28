export type Lessons = {
  title: string;
  slug: string;
  number: number;
  downloadUrl: string;
  sourceUrl?: string;
  videoId: number;
  text: string;
};

export type Chapters = {
  title: string;
  slug: string;
  number: number;
  lessons: Lessons[];
};

export type LessonsWithPath = Lessons & {
  path: string;
};

export type Course = {
  title: string;
  chapters: Chapters[];
};

export type ChapterMeta = {
  title: string;
  slug: string;
  number: number;
  lessons: LessonsMetaWithPath[];
};

export type LessonsMeta = {
  title: string;
  slug: string;
  number: number;
};

export type LessonsMetaWithPath = LessonsMeta & {
  path: string;
};

export type CourseMeta = {
  title: string;
  chapters: ChapterMeta[];
};

export type ChapterProgress = {
  [key: string]: boolean;
};

export type CourseProgress = {
  [key: string]: ChapterProgress;
};
