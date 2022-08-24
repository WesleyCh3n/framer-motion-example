import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LoremIpsum from "./LoremIpsum";

const ScrollLink = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ container: ref });

  return (
    <div className="w-full h-full overflow-y-scroll" ref={ref} >
      <motion.div className="fixed bottom-0 right-0 left-0 h-[10px] bg-orange-400 origin-[0%]" style={{ scaleX: scrollYProgress }} />
      <LoremIpsum />
    </div>
  );
};

export default ScrollLink;
