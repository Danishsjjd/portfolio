import { motion } from "framer-motion";
import { closeSpring, openSpring } from "./animation";

export const ContentPlaceholder = ({
  desc,
  isSelected,
}: {
  desc: string;
  isSelected: boolean;
}) => {
  return (
    <motion.div
      className="w-[90vw] max-w-2xl [padding:_clamp(435px,_80vh+35px,_80vh+35px)_35px_35px_35px]"
      layout
      transition={{ ...(isSelected ? openSpring : closeSpring) }}
    >
      <p>{desc}</p>
    </motion.div>
  );
};
