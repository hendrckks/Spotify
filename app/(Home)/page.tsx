import Header from "@/components/Header";

export default function Home() {
  return (
    <div
      className="
  rounded-lg
  w-full 
  h-full 
  bg-neutral-900
  overflow-hidden
  overflow-y-auto
  "
    >
      <Header
        className=" grid 
        grid-cols-1 
        sm:grid-cols-2 
        xl:grid-cols-3 
        2xl:grid-cols-4 
        gap-3 "
      >
        hello
      </Header>
    </div>
  );
}
