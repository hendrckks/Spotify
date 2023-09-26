interface Tileprops {
  children: React.ReactNode;
  className?: string;
}

const Tile: React.FC<Tileprops> = ({ children, className }) => {
  return (
    <div className="caret-transparent">
      <button
        className="
        flex 
        relative 
        group 
        items-center 
        rounded-md 
        overflow-hidden
        bg-neutral-100/10 
        hover:bg-neutral-100/20
        transition
        font-bold
        lg:max-w-[470px]
        lg:h-[84px]
        md:w-full
        sm:w-full
      "
        name="Liked Songs"
      >
        {children}
      </button>
    </div>
  );
};

export default Tile;
