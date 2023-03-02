"use client";
import { Dispatch, SetStateAction } from "react";
import Select from "react-select";

const models = [
  { value: "gpt-3.5-turbo", label: "gpt-3.5-turbo" },
  { value: "gpt-3.5-turbo-0301", label: "gpt-3.5-turbo-0301" },
  { value: "text-davinci-003", label: "text-davinci-003" },
  { value: "text-davinci-002", label: "text-davinci-002" },
  { value: "code-davinci-002", label: "code-davinci-002" },
];

type ModelSelectionTypes = {
  model: string;
  setModel: Dispatch<SetStateAction<string>>;
};

const ModelSelection = ({ model, setModel }: ModelSelectionTypes) => {
  return (
    <div className="mt-2">
      <Select
        className="mt-2"
        defaultValue={model}
        isSearchable
        menuPosition="fixed"
        classNames={{ control: (state) => "bg-[#434654] border-[#434654]" }}
        placeholder={model}
        onChange={(e) => setModel(e?.valueOf!)}
        options={models}
      />
    </div>
  );
};

export default ModelSelection;
