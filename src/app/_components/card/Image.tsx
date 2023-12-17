import { default as NextImage, type StaticImageData } from "next/image"

import { closeSpring, openSpring } from "./animation"

import { motion } from "framer-motion"

interface Props {
  isSelected: boolean
  img: StaticImageData
  alt: string
}

const MotionNextImage = motion(NextImage)
export const Image = ({ img, isSelected, alt }: Props) => {
  return (
    <motion.div
      className={`pointer-events-none absolute left-0 top-0 overflow-hidden ${
        isSelected ? "h-[75vh] min-h-[400px]" : "h-full object-cover object-top"
      }`}
      layout
      transition={isSelected ? openSpring : closeSpring}
    >
      <MotionNextImage
        src={img}
        alt={alt}
        initial={false}
        transition={isSelected ? openSpring : closeSpring}
        layout={undefined}
      />
    </motion.div>
  )
}
