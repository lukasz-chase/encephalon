// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const userId = Array.isArray(req.query.id)
      ? { in: req.query.id }
      : req.query.id;
    try {
      const data = await prisma.chat.findMany({
        where: {
          userId: userId,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      res.status(200).json(data);
    } catch (err) {
      res.status(403).json({ err: "error when getting chats" });
    }
  }
}
