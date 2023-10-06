const user = "Sam";
const AlbumCard = () => {
  return (
    <div className="px-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-[22px]">Made For {user}</h2>
        <h4 className="text-neutral-600 cursor-pointer">show all</h4>
      </div>
    </div>
  );
};

export default AlbumCard;
