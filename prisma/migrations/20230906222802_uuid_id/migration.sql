/*
  Warnings:

  - Made the column `courseId` on table `Chapter` required. This step will fail if there are existing NULL values in that column.
  - Made the column `chapterId` on table `Lesson` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Chapter" DROP CONSTRAINT "Chapter_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_chapterId_fkey";

-- AlterTable
ALTER TABLE "Chapter" ALTER COLUMN "courseId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Lesson" ALTER COLUMN "chapterId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "Chapter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
