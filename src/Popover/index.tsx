import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const someItems = [
  "Some List 1",
  "Some List 2",
  "Some List 3",
  "Some List 4",
];
export const Popover = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(true);
  return (
    <div className="m-8">
      <button
        className="p-2 w-24 bg-white border rounded-lg  select-none
        flex items-center justify-center
        hover:drop-shadow-lg drop-shadow"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Tools
        <AiFillCaretDown />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -8 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <div className="w-52 h-fit z-10 mt-2 bg-white border
              drop-shadow-lg rounded-lg">
              {someItems.map((item, index) => {
                return (
                  <div
                    className="py-2 px-2 hover:bg-slate-200 cursor-pointer"
                    key={index}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
