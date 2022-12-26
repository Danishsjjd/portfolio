import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

import arrow from "../../assets/images/arrow.svg";
import LinkButton from "../LinkButton";
import { closeSpring, openSpring } from "./animation";

export const ContentPlaceholder = ({
  desc,
  isSelected,
  href,
  isLive,
}: {
  desc: string;
  isSelected: boolean;
  href: string;
  isLive?: string;
}) => {
  return (
    <motion.div
      className="w-[90vw] max-w-3xl [padding:_clamp(435px,_80vh+15px,_80vh+35px)_35px_35px_35px]"
      layout
      transition={{ ...(isSelected ? openSpring : closeSpring) }}
    >
      <div className="flex flex-col items-end justify-end">
        {/* link-btn */}
        <button className="scale-100 transition active:scale-75">
          <a
            href={isLive ? "#Projects" : href}
            className={`group mb-2 flex items-end gap-1 rounded-md   p-3 font-medium text-yellow hover:animate-bg hover:underline`}
            target={isLive ? "_self" : "_blank"}
            rel="noopener noreferrer"
            onClick={() => {
              if (isLive) toast.error(isLive, { position: "bottom-center" });
            }}
          >
            <p>Visit</p>
            <img
              src={arrow}
              alt="arrow"
              className="transition-all group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </button>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
};
