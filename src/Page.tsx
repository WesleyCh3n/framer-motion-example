import { motion, MotionProps } from "framer-motion";
import { HTMLAttributes } from "react";

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

export default Page;
