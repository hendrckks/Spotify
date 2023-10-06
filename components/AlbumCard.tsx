"use client";

import Cards from "./Cards";

const user = "Sam";

const ShowAll = () => {};
const AlbumCard = () => {
  return (
    <div className="px-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-[22px]">Made For {user}</h2>
        <p
          className="text-neutral-500 cursor-pointer text-[14px] caret-transparent "
          onClick={ShowAll}
        >
          Show all
        </p>
      </div>
      <div className="flex gap-6">
        <Cards className="P-5" />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default AlbumCard;
