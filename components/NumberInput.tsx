"use client";
import { ChangeEvent } from "react";

type NumberInputTypes = {
  id: string;
  label: string;
  max: number;
  min: number;
  name: string;
  handleParameters: (e: ChangeEvent<HTMLInputElement>) => void;
};

const NumberInput = ({
  id,
  label,
  max,
  min,
  name,
  handleParameters,
}: NumberInputTypes) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="number"
        max={max}
        min={min}
        step="0.1"
        value={name}
        onChange={handleParameters}
      />
    </div>
  );
};

export default NumberInput;
