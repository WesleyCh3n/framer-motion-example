import { AnimatePresence, motion, PanInfo, useAnimation } from "framer-motion";
import { useRef, useState } from "react";

const MESSAGES = [
  { id: 0, name: "Wesley" },
  { id: 1, name: "Alisson" },
];

const SwipeAction = () => {
  const controls = useAnimation();
  const [msgList, setMsgList] = useState(MESSAGES);

  const ref = useRef(null);

  async function handleDragEnd(info: PanInfo, id: number) {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -180 || velocity < -500) {
      await controls.start({ x: "-100%", transition: { duration: 0.2 } });
      setMsgList(msgList.filter(message => message.id !== id));
    } else {
      controls.start({ x: 0 });
    }
  }
  return (
    <div className="h-full flex justify-center items-center">
      <div
        ref={ref}
        className="h-[422px] w-[195px] bg-black rounded-2xl
        border-8 border-black"
      >
        <ul>
          <AnimatePresence>
            {msgList.map(message => (
              <motion.li key={message.id} className="relative">
                <motion.div
                  drag="x"
                  dragDirectionLock={true}
                  dragConstraints={ref}
                  onDragEnd={(_, info) => handleDragEnd(info, message.id)}
                  className="relative w-full h-16 bg-white drop-shadow-xl cursor-grab z-50"
                // animate={controls}
                >
                  {message.name}
                </motion.div>
                <div className="absolute z-2 right-0 top-0 w-full h-16 bg-red-600" />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
};

export default SwipeAction;
