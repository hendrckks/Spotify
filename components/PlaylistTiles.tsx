"use client";
interface PlaylistTilesprops {
  children: React.ReactNode;
  className?: string;
}

const PlaylistTiles: React.FC<PlaylistTilesprops> = ({ children }) => {
  return <div className="px-6 py-2">{children}</div>;
};

export default PlaylistTiles;
