import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type User = {
  email: string;
};

export default defineEventHandler(async (event) => {
  const { title } = await readBody<any>(event);
  const user = event.context.user as User;

  const { id } = await prisma.course.findFirst({
    where: {
      title: title,
    },
    select: {
      id: true,
    },
  });

  if (!user) {
    return false;
  }

  const coursePurchases = await prisma.coursePurchase.findMany({
    where: {
      userEmail: user.email,
      verified: true,
      courseId: id,
    },
  });

  console.log(coursePurchases.length > 0);
  return coursePurchases.length > 0;
});
