import { PrismaClient } from "@prisma/client";

// So that we can use BigInts in the database
BigInt.prototype.toJSON = function() {
  return Number(this);
}

const prisma = new PrismaClient();

export default async (req, res) => {
    const lessons = await prisma.Lesson.findMany()
    lessons.forEach((lesson) => {
        lesson.createdAt = lesson.createdAt.getTime();
    });

    res.statusCode = 200;
    res.json(lessons);
};
