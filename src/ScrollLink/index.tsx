import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import LoremIpsum from "./LoremIpsum";

const ScrollLink = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const scaleX = useSpring(scrollYProgress);

  return (
    <div className="w-full h-full overflow-y-scroll" ref={ref}>
      <motion.div
        className="fixed bottom-0 right-[5px] left-0 h-[10px] bg-blue-400
        origin-[0%]"
        style={{ scaleX }}
      />
      <LoremIpsum />
    </div>
  );
};

export default ScrollLink;
