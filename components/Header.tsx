"use client";

import { useRouter } from "next/navigation";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import Greetings from "./Greetings";
import PlaylistTiles from "./PlaylistTiles";
import Button from "./Button";
import Tile from "./Tile";
import Image from "next/image";
import LIKED from "../public/images/liked.png";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const HandleLogout = () => {};

  const NavBack = () => {
    router.back();
  };

  const NavFoward = () => {
    router.forward();
  };

  const iconStyle = {
    width: "30px",
    height: "30px",
    fontsize: "20px",
  };

  return (
    <div className="bg-gradient-to-b from-emerald-800 ">
      <div className="flex justify-between p-6">
        <div className="flex gap-x-4 items-center">
          <button
            type="button"
            onClick={NavBack}
            className="rounded-full bg-neutral-800"
          >
            <KeyboardArrowLeftIcon
              style={iconStyle}
              className="text-neutral-300"
            />
          </button>
          <button
            type="button"
            onClick={NavFoward}
            className="rounded-full bg-neutral-800 text-lg"
          >
            <KeyboardArrowRightIcon
              style={iconStyle}
              className="text-neutral-300"
            />
          </button>
        </div>
        <div className="flex items-center gap-x-6">
          <div className="flex gap-x-3">
            <Button
              className="text-white bg-transparent
             hover:bg-white 
             hover:text-black 
             hover:opacity-80"
            >
              <h3>SignUp</h3>
            </Button>
            <Button className="bg-white px-5">
              <h3>Login</h3>
            </Button>
          </div>
          <button className="bg-neutral-900 rounded-full p-1">
            <PersonOutlineIcon style={iconStyle} />
          </button>
        </div>
      </div>
      <Greetings />
      <PlaylistTiles>
        <Tile>
          <div className="flex">
            <div className="w-[84px] h-full">
              <Image src={LIKED} alt="img" className="w-full h-full" />
            </div>
            <div className="relative flex items-center justify-center px-5">
              <h2>Liked Songs</h2>
            </div>
          </div>
        </Tile>
      </PlaylistTiles>
    </div>
  );
};

export default Header;
64;
