import { type Dispatch, type SetStateAction, useEffect, useRef, useState } from "react"

import { useScrollConstraints } from "../../../hooks/useScrollConstrain"
import { useWheelScroll } from "../../../hooks/useWheelScroll"

import { type Card as CardData } from "../../../constants/card"
import { ContentPlaceholder } from "./ContactPlaceHolder"
import { Image } from "./Image"
import { Title } from "./Title"
import { closeSpring, openSpring } from "./animation"

import { type Variants, animate, motion, useMotionValue } from "framer-motion"

const dismissDistance = 20

const childVariants: Variants = {
  whileInView: {
    opacity: 1,
    y: 0,
  },
}

interface Props extends CardData {
  isSelected: boolean
  setIsSelected: Dispatch<SetStateAction<string>>
}

const Card = ({ id, title, description, img, href, ifNotLiveMsg: isLiveMsg, isSelected, setIsSelected }: Props) => {
  const y = useMotionValue(0)

  const zIndex = useMotionValue(isSelected ? 10 : 0)
  const [overflow, setOverflow] = useState(true)

  const cardRef = useRef(null)
  const constraints = useScrollConstraints(cardRef, isSelected)

  function checkSwipeToDismiss() {
    y.get() > dismissDistance && setIsSelected("")
  }

  function checkZIndex() {
    if (isSelected) {
      zIndex.set(99)
      setOverflow(false)
    } else {
      zIndex.set(0)
      setOverflow(true)
    }
  }

  const containerRef = useRef(null)
  useWheelScroll(containerRef, y, constraints, checkSwipeToDismiss, isSelected)

  useEffect(() => {
    if (isSelected) checkZIndex()
    else animate(y, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSelected])

  return (
    <motion.li
      ref={containerRef}
      className={`lg:h-[340px] relative h-60 w-full  rounded-2xl ${
        overflow
          ? "cu-li overflow-hidden outline outline-2 outline-white/0 transition-all duration-300 hover:outline-offset-2 hover:outline-gray-300"
          : ""
      }`}
      layout
      style={{ zIndex, cursor: isSelected ? "auto" : "pointer" }}
      initial={{
        opacity: 0,
        y: 20,
      }}
      variants={childVariants}
      onClick={() => !isSelected && setIsSelected(id)}
    >
      {/* overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: isSelected ? 1 : 0, transition: { duration: 0.5 } }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isSelected ? "auto" : "none" }}
        className="fixed inset-0 z-10  cursor-pointer bg-black/80"
        onClick={() => {
          setIsSelected("")
        }}
      />
      <motion.div
        className={`pointer-events-none block h-full w-full ${
          isSelected ? "open fixed left-0 right-0 top-0 z-10 overflow-hidden px-4 py-10" : "relative"
        }`}
        style={{ zIndex }}
      >
        <motion.div
          ref={cardRef}
          className={`pointer-events-auto relative mx-auto  w-full overflow-hidden rounded-2xl bg-[#1c1c1e] ${
            isSelected ? "h-auto max-w-3xl" : "h-full"
          }`}
          layout
          onLayoutAnimationComplete={checkZIndex}
          style={{ y }}
          transition={isSelected ? openSpring : closeSpring}
          drag={isSelected ? "y" : false}
          dragConstraints={constraints}
          onDragEnd={checkSwipeToDismiss}
        >
          <Image alt="Preview image" img={img} isSelected={isSelected} />
          <ContentPlaceholder desc={description} isSelected={isSelected} href={href} notLive={isLiveMsg} />
        </motion.div>
      </motion.div>
      {/* {!isSelected && (
        <Link to={`/project/${id}`} className={"absolute inset-0"} />
      )} */}
      <Title title={title} isSelected={isSelected} />
    </motion.li>
  )
}

// const Overlay = ({ isSelected }: { isSelected: boolean }) => (
//   <motion.div
//     initial={false}
//     animate={{ opacity: isSelected ? 1 : 0, transition: { duration: 0.5 } }}
//     transition={{ duration: 0.2 }}
//     style={{ pointerEvents: isSelected ? "auto" : "none" }}
//     className="fixed inset-0 z-10  bg-black/80"
//   >
//     <Link to="/" className="absolute inset-0" />
//   </motion.div>
// );

export default Card
