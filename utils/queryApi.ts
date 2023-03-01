import opeani from "./chatgpt";

const query = async (prompt: string, model: string) => {
  const image = await opeani.createImage({
    prompt,
    n: 1,
    size: "1024x1024",
  });
  console.log(image.data);
  const res = await opeani
    .createCompletion({
      model,
      prompt,
      temperature: 0.5,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `ChatGPT was unable to find an answer for that! (Error: ${err.message})`
    );

  return res;
};
export default query;
