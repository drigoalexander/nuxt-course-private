import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { transaction_status, order_id } = await readBody(event);
  if (transaction_status === "settlement" || transaction_status === "capture") {
    try {
      await prisma.coursePurchase.update({
        where: {
          paymentId: order_id,
        },
        data: {
          verified: true,
        },
      });
    } catch (err) {
      throw createError({
        statusCode: 500,
        message: "Failed to verify payment",
      });
    }
  } else if (
    transaction_status === "failure" ||
    transaction_status === "cancel" ||
    transaction_status === "deny" ||
    transaction_status === "expire"
  ) {
    try {
      await prisma.coursePurchase.delete({
        where: {
          paymentId: order_id,
        },
      });
    } catch (err) {
      throw createError({
        statusCode: 500,
        message: "Failed to delete payment",
      });
    }
  }

  return 200;
});
