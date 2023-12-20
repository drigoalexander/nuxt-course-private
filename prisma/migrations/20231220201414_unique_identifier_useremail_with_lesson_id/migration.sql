/*
  Warnings:

  - A unique constraint covering the columns `[lessonId,userEmail]` on the table `LessonProgress` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "LessonProgress_id_lessonId_key";

-- CreateIndex
CREATE UNIQUE INDEX "LessonProgress_lessonId_userEmail_key" ON "LessonProgress"("lessonId", "userEmail");
