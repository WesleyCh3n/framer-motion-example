import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const someItems = [
  "Some List 1",
  "Some List 2",
  "Some List 3",
  "Some List 4",
];
export const Popover = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(true);
  return (
    <div className="mx-20 mt-8">
      <button
        className="py-1 w-24 bg-white border rounded-lg select-none
        flex items-center justify-center
        hover:drop-shadow-lg drop-shadow"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Tools
        <motion.svg className="w-8 h-8">
          <motion.path
            fill="transparent"
            strokeWidth="2"
            strokeLinecap="round"
            animate={isOpen ? "down" : "up"}
            variants={{
              up: { d: "M 12 16 L 16 20 L 20 16", stroke: "#6b7280" },
              down: { d: "M 12 16 L 16 12 L 20 16", stroke: "#6b7280" },
            }} />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -8 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <div className="w-52 h-fit z-10 mt-2 bg-white border select-none
              drop-shadow-lg rounded-lg">
              {someItems.map((item, index) => {
                return (
                  <div
                    className="py-2 px-2 hover:bg-sky-100 cursor-pointer"
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
