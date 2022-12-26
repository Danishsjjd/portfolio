import { motion } from "framer-motion";
import { closeSpring, openSpring } from "./animation";

interface Props {
  isSelected: boolean;
  img: string;
}

export const Image = ({ img, isSelected }: Props) => {
  return (
    <motion.div
      className={`pointer-events-none absolute top-0 left-0 overflow-hidden ${
        isSelected ? "h-[80vh] min-h-[400px]" : "h-full object-cover object-top"
      }`}
      layout
      transition={isSelected ? openSpring : closeSpring}
    >
      <motion.img
        src={img}
        alt=""
        initial={false}
        transition={isSelected ? openSpring : closeSpring}
        layout
      />
    </motion.div>
  );
};
