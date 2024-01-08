import { PrismaClient } from "@prisma/client";
import { Buffer } from "buffer";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { title, email } = await readBody<any>(event);

  const course = await prisma.course.findFirst({
    where: {
      title: title,
    },
    select: {
      price: true,
      id: true,
    },
  });

  if (!course) {
    throw createError({
      statusCode: 404,
      message: "Course Not Found",
    });
  }

  const uuid = uuidv4();

  const { token } = await $fetch(`${config.mdEnpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Basic " + Buffer.from(`${config.mdSecret}`).toString("base64"),
    },
    body: {
      transaction_details: {
        gross_amount: course.price,
        order_id: uuid,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        email: email,
      },
    },
  });

  try {
    await prisma.coursePurchase.create({
      data: {
        userEmail: email,
        courseId: course.id,
        paymentId: uuid,
      },
    });
  } catch (err) {
    throw createError({
      statusCode: 500,
      message: "Failed to create course purchase",
    });
  }
  return { token, uuid };
});
