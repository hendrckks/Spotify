"use client";
interface PlaylistTilesprops {
  children: React.ReactNode;
  className?: string;
}

const PlaylistTiles: React.FC<PlaylistTilesprops> = ({ children }) => {
  return (
    <div
      className="
      px-6 
      py-6
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      xl:grid-cols-3 
      2xl:grid-cols-4 
      gap-3
      "
    >
      {children}
    </div>
  );
};

export default PlaylistTiles;
