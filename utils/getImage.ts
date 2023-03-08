import openai from "./chatgpt";

type queryTypes = {
  prompt: string;
};

const query = async ({ prompt }: queryTypes) => {
  const res = await openai
    .createImage({
      prompt: prompt,
      n: 4,
      size: "1024x1024",
    })
    .then((res: any) => {
      return res.data.data;
    })
    .catch(
      (err: any) => `Error when creating an image (Error: ${err.message})`
    );

  return res;
};
export default query;
