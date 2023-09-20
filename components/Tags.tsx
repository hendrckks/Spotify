import { twMerge } from "tailwind-merge";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

const Tags: React.FC<TagProps> = ({ children, className }) => {
  return (
    <div>
      <button
        className={twMerge(`
      bg-neutral-800
      rounded-full
      text-neutral-300
      items-center
      font-medium
      hover:bg-neutral-700
      cursor-pointer
      flex
      justify-center
      p-2
      h-7
      w-30
      `)}
      >
        {children}
      </button>
    </div>
  );
};

export default Tags;
