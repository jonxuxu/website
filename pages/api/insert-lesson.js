import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  const bearerToken = req.headers.authorization;
  if (bearerToken !== "Bearer poggers") {
    res.statusCode = 401;
    res.end("Unauthorized");
    return;
  }

  console.log(req.body);
  const json = JSON.parse(req.body);
  console.log(json);

  const lesson = "pog";

  //   const lesson = await prisma.Lesson.create({
  //     data: {
  //       lesson: JSON.parse(req.body),
  //     },
  //   });

  res.statusCode = 200;
  res.json(lesson);
};
