import { closeSpring, openSpring } from "./animation"

import { motion } from "framer-motion"

interface Props {
  isSelected: boolean
  img: string
}

export const Image = ({ img, isSelected }: Props) => {
  return (
    <motion.div
      className={`pointer-events-none absolute top-0 left-0 overflow-hidden ${
        isSelected ? "h-[75vh] min-h-[400px]" : "h-full object-cover object-top"
      }`}
      layout
      transition={isSelected ? openSpring : closeSpring}
    >
      <motion.img src={img} alt="" initial={false} transition={isSelected ? openSpring : closeSpring} layout />
    </motion.div>
  )
}