/*
  Warnings:

  - The primary key for the `Chapter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Lesson` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Chapter" DROP CONSTRAINT "Chapter_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_chapterId_fkey";

-- AlterTable
ALTER TABLE "Chapter" DROP CONSTRAINT "Chapter_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "courseId" DROP NOT NULL,
ALTER COLUMN "courseId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Chapter_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Chapter_id_seq";

-- AlterTable
ALTER TABLE "Course" DROP CONSTRAINT "Course_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Course_id_seq";

-- AlterTable
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "chapterId" DROP NOT NULL,
ALTER COLUMN "chapterId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Lesson_id_seq";

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "Chapter"("id") ON DELETE SET NULL ON UPDATE CASCADE;
