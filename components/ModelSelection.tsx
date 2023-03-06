"use client";
import { Dispatch, SetStateAction } from "react";
import Select from "react-select";

type ModelSelectionTypes = {
  model: string;
  setModel: Dispatch<SetStateAction<string>>;
};

const models = [
  { value: "text-davinci-003", label: "text-davinci-003" },
  { value: "text-davinci-002", label: "text-davinci-002" },
  { value: "code-davinci-002", label: "code-davinci-002" },
];

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
        onChange={(e) => setModel(e?.value)}
        options={models}
      />
    </div>
  );
};

export default ModelSelection;
