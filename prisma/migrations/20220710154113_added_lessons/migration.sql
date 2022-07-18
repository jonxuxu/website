/*
  Warnings:

  - You are about to drop the `lessons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "lessons";

-- CreateTable
CREATE TABLE "Lesson" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lesson" TEXT NOT NULL,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id")
);
