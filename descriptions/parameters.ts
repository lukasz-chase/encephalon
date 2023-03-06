export const parameters = [
  {
    title: "temperature",
    text: ` number Optional Defaults to 1 What sampling
        temperature to use, between 0 and 2. Higher values like 0.8 will make
        the output more random, while lower values like 0.2 will make it more
        focused and deterministic. We generally recommend altering this or
        top_p but not both`,
  },
  {
    title: "top_p",
    text: ` number Optional Defaults to 1 An alternative to sampling
        with temperature, called nucleus sampling, where the model considers
        the results of the tokens with top_p probability mass. So 0.1 means
        only the tokens comprising the top 10% probability mass are
        considered. We generally recommend altering this or temperature but
        not both.`,
  },
  {
    title: "presence_penalty ",
    text: ` number Optional Defaults to 0 Number between -2.0 and
        2.0. Positive values penalize new tokens based on whether they appear
        in the text so far, increasing the model's likelihood to talk about
        new topics.`,
  },
  {
    title: "frequency_penalty ",
    text: ` number Optional Defaults to 0 Number between -2.0
        and 2.0. Positive values penalize new tokens based on their existing
        frequency in the text so far, decreasing the model's likelihood to
        repeat the same line verbatim.`,
  },
];

export const models = [
  {
    title: "text-davinci-003",
    text: ` Can do any language task with better quality, longer output, and consistent instruction-following than the curie, babbage, or ada models. Also supports inserting completions within text.`,
  },
  {
    title: "text-davinci-002",
    text: ` Similar capabilities to text-davinci-003 but trained with supervised fine-tuning instead of reinforcement learning`,
  },
  {
    title: "code-davinci-002 ",
    text: ` Optimized for code-completion tasks`,
  },
];
