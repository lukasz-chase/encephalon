// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { AuthOptions } from "../../api/auth/[...nextauth]";
import prisma from "@/prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const session = await getServerSession(req, res, AuthOptions);
    if (!session)
      return res.status(401).json({ message: "You need to be logged in" });

    const { data: chatId } = JSON.parse(req.body);

    try {
      await prisma.message.deleteMany({
        where: {
          chatId: chatId,
        },
      });
      const result = await prisma.chat.delete({
        where: {
          id: chatId,
        },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(403).json({ err: "error when deleting a chat" });
    }
  }
}
