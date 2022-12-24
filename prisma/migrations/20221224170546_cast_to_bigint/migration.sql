/*
  Warnings:

  - You are about to alter the column `id` on the `Lesson` table. The data in that column will be cast from `Int` to `BigInt`. This cast may fail. Please make sure the data in the column can be cast.

*/
-- RedefineTables
CREATE TABLE "_prisma_new_Lesson" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lesson" STRING NOT NULL,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id")
);
INSERT INTO "_prisma_new_Lesson" ("createdAt","id","lesson") SELECT "createdAt","id","lesson" FROM "Lesson";
DROP TABLE "Lesson" CASCADE;
ALTER TABLE "_prisma_new_Lesson" RENAME TO "Lesson";
