// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/prisma/client";
import query from "@/utils/getImage";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt, userId }: { prompt: string; userId: string } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Please provide a text!" });
    return;
  }

  const response: [{ url: string }] = await query({
    prompt,
  });
  const links = response.map((obj) => obj.url.match(/https?:\/\/[^\s]+/)![0]);
  try {
    const result = await prisma.generatedImage.create({
      data: {
        prompt,
        userId,
        imageLinks: links,
      },
    });
    res.status(200).json(result);
  } catch (err: any) {
    res.status(403).json({ err: "error when creating a image" });
  }
}
