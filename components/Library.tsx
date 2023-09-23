"use client";

import AddIcon from "@mui/icons-material/Add";
import { TbPlaylist } from "react-icons/tb";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Tags from "./Tags";
import { BiSearch } from "react-icons/bi";

import Box from "./Box";

const Library = () => {
  const CreatePlaylist = () => {};

  const Expand = () => {};

  return (
    <div className="flex flex-col caret-transparent ">
      <div
        className="
      ml-3
      items-center
      w-full 
      gap-x-3
      cursor-pointer 
      inline-flex
      px-4
      py-2
      "
      >
        <div
          className="
        font-bold 
        text-neutral-500 
        hover:text-white
        text-md
        py-4
        flex
        gap-3
        "
        >
          <TbPlaylist size={24} />
          <h2>Your Library</h2>
        </div>
        <div className="ml-[10rem] flex items-center gap-4">
          <AddIcon
            onClick={CreatePlaylist}
            className="text-neutral-500 hover:text-white"
          />
          <ArrowForwardIcon
            onClick={Expand}
            className="text-neutral-500 hover:text-white"
          />
        </div>
      </div>
      <div className="flex items-centre gap-x-2 mt-2 px-4">
        <Tags>
          <h3 className="text-sm">Playlists</h3>
        </Tags>
        <Tags>
          <h3 className="text-sm">Artist</h3>
        </Tags>
        <Tags>
          <h3 className="text-sm">Albums</h3>
        </Tags>
      </div>
      <div>
        <Box className="h-120">
          <div className="cursor-pointer flex p-6 items-center text-bold ">
            <BiSearch size={20} />
            <h2 className="ml-[17rem] text-[15px] text-neutral-500 hover:text-white font-medium">
              Recents
            </h2>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Library;
