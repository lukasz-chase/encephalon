import { models, parameters } from "@/descriptions/parameters";
import React, { Dispatch, SetStateAction } from "react";

const HelpModal = ({
  setHelpModal,
}: {
  setHelpModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-full w-full flexCenter bg-black/50"
      onClick={() => setHelpModal(false)}
    >
      <div className="flex flex-col mt-20 gap-5 p-5 max-w-lg bg-light-shades rounded-lg">
        {parameters.map(({ title, text }) => (
          <p>
            <b>{title}</b>
            {text}
          </p>
        ))}
        <p>
          <h1>
            <b>Models</b>
          </h1>
          The OpenAI is powered by a diverse set of models with different
          capabilities.
        </p>
        {models.map(({ title, text }) => (
          <p>
            <b>{title}</b>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HelpModal;
