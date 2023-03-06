"use client";
import { ChangeEvent } from "react";

type NumberInputTypes = {
  id: string;
  label: string;
  max: number;
  min: number;
  name: string;
  handleParameters: (e: ChangeEvent<HTMLInputElement>) => void;
  parameters: {
    temperature: number;
    topP: number;
    frequencyPenalty: number;
    presencePenalty: number;
  };
};

const NumberInput = ({
  id,
  label,
  max,
  min,
  name,
  handleParameters,
  parameters,
}: NumberInputTypes) => {
  return (
    <div className="flex flex-col items-center">
      <label htmlFor={id}>{label}</label>
      <input
        className="text-white text-center rounded-lg bg-[#434654]"
        id={id}
        type="number"
        name={name}
        max={max}
        min={min}
        step="0.1"
        value={parameters[name]}
        onChange={handleParameters}
      />
    </div>
  );
};

export default NumberInput;
