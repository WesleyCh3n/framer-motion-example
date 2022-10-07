import { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { AnimatePresence } from "framer-motion";

import Page from "./Page";
import { PageItems } from "./PageItems";

function App() {
  const [[id, direction], setId] = useState([0, 0]);

  return (
    <div className="w-screen h-screen flex justify-center items-center relative
      overflow-hidden bg-orange-100">
      <AnimatePresence initial={false} custom={direction}>
        {PageItems.map(({ className, item }, index) => (
          <Page key={index} custom={direction} className={className}>
            {item}
          </Page>
        ))[id]}
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
        disabled={id === PageItems.length - 1 ? true : false}
        onClick={() => setId([id + 1, 1])}
      >
        {<BiRightArrow size={40} />}
      </button>
    </div>
  );
}

export default App;
