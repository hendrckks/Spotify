"use client";

import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
  const onclick = () => {};

  return (
    <div
      className="bg-emerald-500
            rounded-full
            p-4
            opacity-0
            group-hover:opacity-100
            group-hover:scale-110
            transition 
            text-black
            "
      onClick={onclick}
    >
      <FaPlay />
    </div>
  );
};

export default PlayButton;
