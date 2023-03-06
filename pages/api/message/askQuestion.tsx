// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/prisma/client";
import query from "@/utils/queryApi";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    text,
    chatId,
    model,
    temperature,
    frequencyPenalty,
    presencePenalty,
    topP,
  } = req.body;

  if (!text) {
    res.status(400).json({ answer: "Please provide a text!" });
    return;
  }
  if (!chatId) {
    res.status(400).json({ answer: "Please provide a valid chat ID!" });
    return;
  }

  const response = await query({
    prompt: text,
    model,
    temperature,
    frequencyPenalty,
    presencePenalty,
    topP,
  });
  try {
    const result = await prisma.message.create({
      data: {
        text: response || "ChatGPT was unable to find an answer for that!",
        author: "ChatGPT",
        chatId,
        avatar: "https://links.papareact.com/89k",
      },
    });
    res.status(200).json(result);
  } catch (err: any) {
    res.status(403).json({ err: "error when creating a post" });
  }
}
