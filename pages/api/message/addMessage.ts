// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { AuthOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/prisma/client";

type bodyProps = {
  text: string;
  author: string;
  chatId: string;
  topP: number;
  temperature: number;
  frequencyPenalty: number;
  presencePenalty: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, AuthOptions);
    if (!session)
      return res.status(401).json({ message: "You need to be logged in" });

    const { text, author, chatId }: bodyProps = req.body;

    if (!text.length)
      return res
        .status(403)
        .json({ message: "Please do not leave this empty" });

    try {
      const result = await prisma.message.create({
        data: {
          text,
          author,
          chatId,
        },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(403).json({ err: "error when creating a post" });
    }
  }
}
