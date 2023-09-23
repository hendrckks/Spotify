import { type } from "os";
import { twMerge } from "tailwind-merge";

interface Buttonprops extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<Buttonprops> = ({ children, className, disabled }) => {
  return (
    <div>
      <button
        type="button"
        className={twMerge(
          `
      flex
      items-center
      rounded-full
      w-full
      px-3
      py-3
      border-transparent
      hover:opacity-70
      transition
      text-black
      font-bold
      `,
          className
        )}
      >
        {children}
      </button>
    </div>
  );
};

Button.displayName = "Button";

export default Button;
