"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import Box from "./Box";
import SideBarItem from "./SideBarItem";
import Library from "./Library";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

interface SideBarProps {
  children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );
  return (
    <div className="flex h-full">
      <div
        className="
        hidden
        md:flex
        flex-col
        gap-y-2
        bg-black
        h-full
        w-[555px]
        p-2
        "
      >
        <Box>
          <div
            className="
          flex
          flex-col
          gap-y-4
          px-5
          py-4
          "
          >
            {routes.map((route) => (
              <SideBarItem key={route.label} {...route} />
            ))}
          </div>
        </Box>
        <Box className="h-full overflow-y-auto flex-col">
          <Library />
        </Box>
      </div>
      <main className="w-full overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default SideBar;
