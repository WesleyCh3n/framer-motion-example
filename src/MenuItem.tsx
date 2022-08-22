import { motion, MotionProps } from "framer-motion";
import { HTMLAttributes } from "react";

const MenuItem = (props: HTMLAttributes<HTMLDivElement> & MotionProps) => {
  return (
    <motion.div
      className="absolute w-12 h-12 bg-gray-200 rounded-full
                 drop-shadow-md hover:drop-shadow-lg
                 flex justify-center items-center"
      {...props}
    >
    </motion.div>
  );
};

export default MenuItem;
