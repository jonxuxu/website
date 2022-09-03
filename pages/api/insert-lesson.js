import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const bearerToken = req.headers.authorization;
  if (bearerToken !== "Bearer poggers") {
    res.statusCode = 401;
    res.end("Unauthorized");
    return;
  }

  const lesson = req.body.lesson;
  const date = new Date(req.body.createdAt);

  const result = await prisma.Lesson.create({
    data: {
      lesson: lesson,
      createdAt: date,
    },
  });

  res.statusCode = 200;
  res.json(result);
};
