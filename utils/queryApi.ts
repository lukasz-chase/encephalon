import opeani from "./chatgpt";

type queryTypes = {
  prompt: string;
  model: string;
  temperature: number;
  topP: number;
  frequencyPenalty: number;
  presencePenalty: number;
};

const query = async ({
  prompt,
  model,
  temperature,
  frequencyPenalty,
  presencePenalty,
  topP,
}: queryTypes) => {
  const res = await opeani
    .createCompletion({
      model,
      prompt,
      temperature: temperature,
      max_tokens: 1000,
      top_p: topP,
      frequency_penalty: frequencyPenalty,
      presence_penalty: presencePenalty,
    })
    .then((res: any) => res.data.choices[0].text)
    .catch(
      (err: any) =>
        `ChatGPT was unable to find an answer for that! (Error: ${err.message})`
    );

  return res;
};
export default query;
