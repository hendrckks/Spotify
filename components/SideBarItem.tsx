import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface iconprops {
  className?: string;
}

interface SideBarIteProps {
  icon: any;
  label: string;
  active?: boolean;
  href: string;
}

const SideBarItem: React.FC<SideBarIteProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `ml-3 
        font-bold 
        text-neutral-500 
        hover:text-white 
        h-auto 
        items-center
         w-full 
         flex 
         flex-row 
         gap-x-4 
         text-md  
         cursor-pointer 
         transition 
         py-1
         caret-transparent
         `,
        active && "text-white"
      )}
    >
      <div className="flex gap-x-3">
        <div>
          <Icon size={26} />
        </div>
        <div className="p-1">{label}</div>
      </div>
    </Link>
  );
};

export default SideBarItem;
