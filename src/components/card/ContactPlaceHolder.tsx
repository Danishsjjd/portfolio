import { motion } from "framer-motion"
import { toast } from "react-hot-toast"

import arrow from "../../assets/images/arrow.svg"
import { closeSpring, openSpring } from "./animation"

export const ContentPlaceholder = ({
  desc,
  isSelected,
  href,
  notLive,
}: {
  desc: string
  isSelected: boolean
  href: string
  notLive?: string
}) => {
  return (
    <motion.div
      className="w-[90vw] max-w-3xl [padding:_clamp(435px,_75vh+10px,_75vh+10px)_15px_15px_15px] sm:[padding:_clamp(435px,_75vh+15px,_75vh+35px)_35px_35px_35px]"
      layout
      transition={{ ...(isSelected ? openSpring : closeSpring) }}
    >
      <div className="flex flex-col items-end justify-end">
        {/* link-btn */}
        <button className="scale-100 transition active:scale-75">
          <a
            href={notLive ? "" : href}
            className={`group mb-2 flex items-end gap-1 rounded-md   p-3 font-medium text-yellow hover:animate-bg hover:underline`}
            target={notLive ? "_self" : "_blank"}
            rel="noopener noreferrer"
            onClick={(e) => {
              if (notLive) {
                toast.error(notLive, { position: "bottom-center" })
                return e.preventDefault()
                // top.location.href = this.href;
              }
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
  )
}
