"use client";
import { Dispatch, SetStateAction } from "react";

type ModelSelectionTypes = {
  model: string;
  setModel: Dispatch<SetStateAction<string>>;
};

const ModelSelection = ({ model, setModel }: ModelSelectionTypes) => {
  return (
    <div className="mt-2">
      <select
        className="select w-full"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      >
        <option value="text-davinci-003">text-davinci-003</option>
        <option value="text-davinci-002">text-davinci-002</option>
        <option value="code-davinci-002">code-davinci-002</option>
      </select>
    </div>
  );
};

export default ModelSelection;
