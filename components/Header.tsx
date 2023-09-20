"use client";

import { useRouter } from "next/navigation";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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
  };

  return (
    <div className="flex bg-gradient-to-b from-emerald-800 p-6">
      <div className="flex gap-x-4 items-center">
        <button
          type="button"
          onClick={NavBack}
          className="rounded-full bg-neutral-800"
        >
          <div className="text-sm flex items-center">
            <KeyboardArrowLeftIcon
              style={iconStyle}
              className="text-neutral-300"
            />
          </div>
        </button>
        <button
          type="button"
          onClick={NavFoward}
          className="rounded-full bg-neutral-800 text-lg"
        >
          <div className="flex items-center">
            <KeyboardArrowRightIcon
              style={iconStyle}
              className="text-neutral-300"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
