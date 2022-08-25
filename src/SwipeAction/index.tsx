import { motion, PanInfo, useAnimation } from "framer-motion";

const SwipeAction = () => {
  const controls = useAnimation();
  async function handleDragEnd(_: MouseEvent, info: PanInfo) {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -100 || velocity < -500) {
    } else {
      controls.start({ x: 0 })
    }
  }
  return (
    <div className="h-full flex justify-center items-center">
      <motion.div
        drag="x"
        dragDirectionLock
        onDragEnd={handleDragEnd}
        className="w-64 h-16 bg-white rounded-lg drop-shadow-xl"
        animate={controls}
      >
      </motion.div>
    </div>
  );
};

export default SwipeAction;
