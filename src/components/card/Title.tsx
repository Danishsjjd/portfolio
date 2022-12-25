import { motion } from "framer-motion";
import { closeSpring, openSpring } from "./animation";

type Props = {
  title: string;
  isSelected: boolean;
};

export const Title = ({ title, isSelected }: Props) => {
  const x = isSelected ? 30 : 15;
  const y = x;

  return (
    <motion.div
      className="absolute top-0 left-0 max-w-xs"
      initial={false}
      animate={{ x, y }}
      style={{ originX: 0, originY: 0 }}
      layout
      transition={{ ...(isSelected ? openSpring : closeSpring) }}
    >
      <span className="uppercase text-white">Projects</span>
      <h2>{title}</h2>
    </motion.div>
  );
};
