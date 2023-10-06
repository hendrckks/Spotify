interface Cards {
  className?: string;
}

const Cards: React.FC<Cards> = ({ className }) => {
  return (
    <div className="h-[16rem] w-[14rem] bg-neutral-800 rounded-lg mt-10 hover:bg-neutral-700 transition">
      <div className="p-2">cards</div>
    </div>
  );
};

export default Cards;
