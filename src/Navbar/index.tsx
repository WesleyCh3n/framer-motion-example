import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-screen">
      <div className="absolute w-full h-12 flex justify-center items-center
        bg-orange-400 text-white drop-shadow-lg">
        Header
      </div>
      <div className="fixed h-full w-full">
        <div
          contextMenu="Dim Background"
          className={`absolute top-12 w-full h-[calc(100%-48px)] bg-black
            duration-300
            ${isOpen ? "visible opacity-40" : "opacity-0 invisible"}`}
        >
        </div>
        <button
          contextMenu="Menu Button"
          className="h-12 w-7 relative flex flex-col justify-center
          text-white z-[1] ml-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className="block w-full h-[3px] bg-white transition-transform"
            style={{
              transform: isOpen ? "translate3d(0,7px,0) rotate(45deg)" : "",
            }}
          />
          <span
            className={`mt-1 block w-full h-[3px] bg-white transition-opacity
${isOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className="mt-1 block w-full h-[3px] bg-white transition-transform"
            style={{
              transform: isOpen ? "translate3d(0,-7px,0) rotate(-45deg)" : "",
            }}
          />
        </button>
        <div
          contextMenu="Sidebar Content"
          className={`absolute top-0 left-0 mt-12 w-[90%] max-w-[40%] min-w-[300px] p-4
          h-[calc(100%-48px)] bg-slate-100 duration-300 drop-shadow-lg
${isOpen ? "translate-x-0" : "translate-x-[-100%]"}
          `}>
          <ul className="h-full flex flex-col">
            <li className="p-2 cursor-pointer hover:text-orange-300 transition-colors uppercase">Home</li>
            <li className="p-2 cursor-pointer hover:text-orange-300 transition-colors uppercase">Blog</li>
            <li className="p-2 cursor-pointer hover:text-orange-300 transition-colors uppercase">Portfolio</li>
          </ul>
        </div>
      </div>

      <div contextMenu="Page Content" className="pt-12 h-1/2 flex flex-col">
        <div className="m-auto">
          Some page content
        </div>
      </div>
    </div>
  );
};
