import prisma from "@/prisma/client";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const chatId = Array.isArray(req.query.id)
        ? { in: req.query.id }
        : req.query.id;
      const data = await prisma.message.findMany({
        where: {
          chatId: chatId,
        },
        orderBy: {
          createdAt: "asc",
        },
      });
      res.status(200).json(data);
    } catch (err) {
      res.status(403).json({ err: "error when creating a post" });
    }
  }
}
