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
    <div>
      <label htmlFor={id}>{label}</label>
      <input
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
