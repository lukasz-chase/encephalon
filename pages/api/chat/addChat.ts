// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { AuthOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/prisma/client";
import { Session } from "@/types/authTypes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session: Session | null = await getServerSession(
      req,
      res,
      AuthOptions
    );
    if (!session)
      return res.status(401).json({ message: "You need to be logged in" });

    const prismaUser = await prisma.user.findUnique({
      where: { email: session?.user?.email! },
    });

    try {
      const result = await prisma.chat.create({
        data: {
          userId: prismaUser!.id,
        },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(403).json({ err: "error when creating a chat" });
    }
  }
}
