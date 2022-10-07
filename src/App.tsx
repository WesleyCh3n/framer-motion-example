import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import Menu from "./AnimatedMenu";
import { Navbar } from "./Navbar";
import Page from "./Page";
import { Popover } from "./Popover";
import ReorderList from "./ReorderList";
import ScrollLink from "./ScrollLink";

const Pages = (direction: number) => ({
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
      className="w-1/3 bg-white drop-shadow-2xl absolute"
    >
      <ReorderList />
    </Page>
  ),
  2: (
    <Page
      key={2}
      custom={direction}
      className="w-1/3 h-2/3 bg-white drop-shadow-2xl absolute"
    >
      <ScrollLink />
    </Page>
  ),
  3: (
    <Page
      key={3}
      custom={direction}
      className="w-96 h-72 block bg-slate-50 drop-shadow-2xl absolute"
    >
      <Popover />
    </Page>
  ),
  4: (
    <Page
      key={4}
      custom={direction}
      className="w-1/2 h-1/2 block bg-slate-50 drop-shadow-2xl absolute overflow-clip"
    >
      <Navbar />
    </Page>
  ),
  /* 10: (
    <Page
      key={10}
      custom={direction}
      className="w-[30vw] h-[30vw] block bg-blue-200 drop-shadow-2xl absolute"
    >
      <SwipeAction />
    </Page>
  ), */
});

function App() {
  const [[id, direction], setId] = useState([0, 0]);
  const pages = Pages(direction) as any;
  const pages_len = Object.keys(pages).length;

  return (
    <div className="w-screen h-screen flex justify-center items-center relative
      overflow-hidden bg-orange-100">
      <AnimatePresence initial={false} custom={direction}>
        {pages[id]}
      </AnimatePresence>
      <button
        className="fixed left-6 h-12 w-12 p-3 z-3 text-gray-600
        transition ease-in-out hover:scale-125 active:scale-100
        disabled:text-gray-400 disabled:cursor-default disabled:hover:scale-100"
        disabled={id === 0 ? true : false}
        onClick={() => setId([id - 1, -1])}
      >
        {<BiLeftArrow size={40} />}
      </button>
      <button
        className="fixed right-6 h-12 w-12 p-3 z-3 text-gray-600
        transition ease-in-out hover:scale-125 active:scale-100
        disabled:text-gray-400 disabled:cursor-default disabled:hover:scale-100"
        disabled={id === pages_len - 1 ? true : false}
        onClick={() => setId([id + 1, 1])}
      >
        {<BiRightArrow size={40} />}
      </button>
    </div>
  );
}

export default App;
