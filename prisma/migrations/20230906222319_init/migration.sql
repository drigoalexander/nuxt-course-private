/*
  Warnings:

  - The primary key for the `Chapter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Chapter` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Course` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Lesson` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Lesson` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `courseId` to the `Chapter` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `number` on the `Lesson` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `chapterId` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Chapter" DROP CONSTRAINT "Chapter_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_chapterId_fkey";

-- AlterTable
ALTER TABLE "Chapter" DROP CONSTRAINT "Chapter_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "courseId",
ADD COLUMN     "courseId" INTEGER NOT NULL,
ADD CONSTRAINT "Chapter_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Course" DROP CONSTRAINT "Course_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "number",
ADD COLUMN     "number" INTEGER NOT NULL,
DROP COLUMN "chapterId",
ADD COLUMN     "chapterId" INTEGER NOT NULL,
ADD CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "Chapter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
