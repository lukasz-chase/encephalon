import React from "react";

const HelpModal = () => {
  return (
    <div>
      <p>
        temperature number Optional Defaults to 1 What sampling temperature to
        use, between 0 and 2. Higher values like 0.8 will make the output more
        random, while lower values like 0.2 will make it more focused and
        deterministic. We generally recommend altering this or top_p but not
        both
      </p>
      <p>
        top_p number Optional Defaults to 1 An alternative to sampling with
        temperature, called nucleus sampling, where the model considers the
        results of the tokens with top_p probability mass. So 0.1 means only the
        tokens comprising the top 10% probability mass are considered. We
        generally recommend altering this or temperature but not both.
      </p>
      <p>
        presence_penalty number Optional Defaults to 0 Number between -2.0 and
        2.0. Positive values penalize new tokens based on whether they appear in
        the text so far, increasing the model's likelihood to talk about new
        topics.
      </p>
      <p>
        frequency_penalty number Optional Defaults to 0 Number between -2.0 and
        2.0. Positive values penalize new tokens based on their existing
        frequency in the text so far, decreasing the model's likelihood to
        repeat the same line verbatim.
      </p>
      <p>
        pt-3.5-turbo Most capable GPT-3.5 model and optimized for chat at 1/10th
        the cost of text-davinci-003. Will be updated with our latest model
        iteration.
      </p>
      <p>
        LATEST MODEL DESCRIPTION MAX REQUEST TRAINING DATA gpt-3.5-turbo Most
        capable GPT-3.5 model and optimized for chat at 1/10th the cost of
        text-davinci-003. Will be updated with our latest model iteration. 4,096
        tokens Up to Sep 2021 gpt-3.5-turbo-0301 Snapshot of gpt-3.5-turbo from
        March 1st 2023. Unlike gpt-3.5-turbo, this model will not receive
        updates, and will only be supported for a three month period ending on
        June 1st 2023. 4,096 tokens Up to Sep 2021 text-davinci-003 Can do any
        language task with better quality, longer output, and consistent
        instruction-following than the curie, babbage, or ada models. Also
        supports inserting completions within text. 4,000 tokens Up to Jun 2021
        text-davinci-002 Similar capabilities to text-davinci-003 but trained
        with supervised fine-tuning instead of reinforcement learning 4,000
        tokens Up to Jun 2021 code-davinci-002 Optimized for code-completion
        tasks 4,000 tokens Up to Jun 2021
      </p>
    </div>
  );
};

export default HelpModal;
