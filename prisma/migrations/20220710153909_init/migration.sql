-- CreateTable
CREATE TABLE "lessons" (
    "datetime" TIMESTAMP(6) NOT NULL,
    "lesson" TEXT NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "lessons_pkey" PRIMARY KEY ("id")
);
