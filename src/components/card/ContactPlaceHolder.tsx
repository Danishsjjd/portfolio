import { motion } from "framer-motion";

import arrow from "../../assets/images/arrow.svg";
import LinkButton from "../LinkButton";
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
      className="w-[90vw] max-w-3xl [padding:_clamp(435px,_80vh+15px,_80vh+35px)_35px_35px_35px]"
      layout
      transition={{ ...(isSelected ? openSpring : closeSpring) }}
    >
      <div className="flex flex-col items-end justify-end">
        <LinkButton to="/" className="group mb-2 flex items-end gap-1 p-3">
          <p>Visit</p>
          <img
            src={arrow}
            alt="arrow"
            className="transition-all group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </LinkButton>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
};
