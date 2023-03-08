"use client";
import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

type imageProps = {
  prompt: string;
  url: string;
  index: number;
};

const Image = ({ prompt, url, index }: imageProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      onMouseLeave={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
      className="flexCenter cursor-pointer"
      href={url}
      target="_blank"
    >
      <img
        src={url}
        alt={`${prompt}-${index}`}
        className={`${hovered && "opacity-20"}`}
      />
      {hovered && <ArrowDownTrayIcon className={`h-20 w-20 absolute`} />}
    </a>
  );
};

export default Image;
