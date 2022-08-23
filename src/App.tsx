import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { HTMLAttributes, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import Menu from "./AnimatedMenu";
import ReorderList from "./ReorderList";

const directionOffset = 1500;
const pageVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? directionOffset : -directionOffset,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? directionOffset : -directionOffset,
      opacity: 0,
    };
  },
};

const Page = (props: HTMLAttributes<HTMLDivElement> & MotionProps) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: {
          type: "spring",
          stiffness: 800,
          damping: 100,
          duration: 0.1,
        },
        opacity: { duration: 0.6 },
      }}
      {...props}
    />
  );
};

function App() {
  const [[id, direction], setId] = useState([0, 0]);

  return (
    <div className="w-screen h-screen flex justify-center items-center relative
      overflow-hidden bg-orange-100">
      <AnimatePresence initial={false} custom={direction}>
        {{
          0: (
            <Page
              key={0}
              className="w-[332px] h-28 bg-white drop-shadow-2xl absolute"
              custom={direction}
            >
              <AnimatePresence>
                <Menu />
              </AnimatePresence>
            </Page>
          ),
          1: (
            <Page
              key={1}
              custom={direction}
              className="w-1/3 bg-white drop-shadow-2xl"
            >
              <ReorderList />
            </Page>
          ),
        }[id]}
      </AnimatePresence>
      <motion.button
        className="fixed left-6 h-12 w-12 p-3 z-3 text-gray-600
        disabled:text-gray-400 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.0 }}
        disabled={id === 0 ? true : false}
        onClick={() => {
          setId([id - 1, -1]);
        }}
      >
        {<BiLeftArrow size={40} />}
      </motion.button>
      <motion.button
        className="fixed right-6 h-12 w-12 p-3 z-3 text-gray-600
        disabled:text-gray-400 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.0 }}
        disabled={id === 1 ? true : false}
        onClick={() => {
          setId([id + 1, 1]);
        }}
      >
        {<BiRightArrow size={40} />}
      </motion.button>
    </div>
  );
}

export default App;
