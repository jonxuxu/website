import { PrismaClient } from "@prisma/client";
import "../../utils/prisma";

// So that we can use BigInts in the database
BigInt.prototype.toJSON = function() {
  return Number(this);
}

const prisma = new PrismaClient();

export default async (req, res) => {
  const bearerToken = req.headers.authorization;
  if (bearerToken !== "Bearer poggers") {
    res.statusCode = 401;
    res.end("Unauthorized");
    console.log("insert-lesson called with invalid token")
    return;
  }

  console.log("insert-lesson called with valid token")

  const lesson = req.body.lesson;
  const date = new Date(req.body.createdAt);

  // log type of lesson and date

  const result = await prisma.Lesson.create({
    data: {
      lesson: lesson,
      createdAt: date,
    },
  });

  console.log("SUCCESS")

  res.statusCode = 200;
  res.json(result);
};
