import { motion, SVGMotionProps, useAnimation } from "framer-motion";
import { RefAttributes, useState } from "react";
import MenuItem from "./MenuItem";
import { AiOutlineFile, AiOutlineFolder, AiOutlineUser } from "react-icons/ai"

const Path = (
  props: SVGMotionProps<SVGPathElement> & RefAttributes<SVGPathElement>,
) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  >
  </motion.path>
);

export const Menu = () => {
  const controls = useAnimation();
  const [isOn, setIsOn] = useState<Boolean>(false);
  return (
    <div className="mt-8 ml-8">
      <motion.div
        className="absolute w-12 h-12 bg-gray-200 cursor-pointer z-10
      drop-shadow hover:drop-shadow-lg"
        animate={controls}
        variants={{
          "off": { borderRadius: "50%" },
          "on": { borderRadius: "20%" },
        }}
        initial="off"
        onClick={() => {
          controls.start(isOn ? "off" : "on");
          setIsOn(!isOn);
        }}
      >
        <motion.svg className="w-12 h-12">
          <Path
            animate={controls}
            initial="off"
            variants={{
              "off": { d: "M 14 16 L 34 16", stroke: "#6b7280" },
              "on": { d: "M 14 16 L 34 32", stroke: "#ef4444" },
            }}
          />
          <Path
            d="M 14 24 L 34 24"
            animate={controls}
            initial="off"
            variants={{
              "off": { opacity: 1, stroke: "#6b7280" },
              "on": { opacity: 0, stroke: "#ef4444" },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            animate={controls}
            initial="off"
            variants={{
              "on": { d: "M 14 32 L 34 16", stroke: "#ef4444" },
              "off": { d: "M 14 32 L 34 32", stroke: "#6b7280" },
            }}
          />
        </motion.svg>
      </motion.div>
      <MenuItem
        animate={controls}
        variants={{
          "off": { x: 0, y: 0, opacity: 0, transition: { type: "linear" } },
          "on": { x: 72, opacity: 1 },
        }}
        initial="off"
        children={<AiOutlineUser className="text-gray-500" size={24} />}
      />
      <MenuItem
        animate={controls}
        variants={{
          "off": { x: 0, y: 0, opacity: 0, transition: { type: "linear" } },
          "on": { x: 72 * 2, opacity: 1 },
        }}
        initial="off"
        children={<AiOutlineFile className="text-gray-500" size={24} />}
      />
      <MenuItem
        animate={controls}
        variants={{
          "off": { x: 0, y: 0, opacity: 0, transition: { type: "linear" } },
          "on": { x: 72 * 3, opacity: 1 },
        }}
        initial="off"
        children={<AiOutlineFolder className="text-gray-500" size={24} />}
      />
    </div>
  );
};

export default Menu;
