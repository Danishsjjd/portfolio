import { animate, motion, useMotionValue, Variants } from "framer-motion"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { Card as CardData } from "../../constants/card"
import { useScrollConstraints } from "../../hooks/useScrollConstrain"
import { useWheelScroll } from "../../hooks/useWheelScroll"
import { closeSpring, openSpring } from "./animation"
import { ContentPlaceholder } from "./ContactPlaceHolder"
import { Image } from "./Image"
import { Title } from "./Title"

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

const Card = ({
  id,
  title,
  description,
  img,
  href,
  ifNotLiveMsg: isLiveMsg,
  isSelected,
  setIsSelected,
}: Props) => {
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
  }, [isSelected])

  return (
    <motion.li
      ref={containerRef}
      className={`relative h-60 w-full rounded-2xl  lg:h-[340px] ${
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
          isSelected
            ? "open fixed top-0 left-0 right-0 z-10 overflow-hidden py-10 px-4"
            : "relative"
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
          <Image img={img} isSelected={isSelected} />
          <ContentPlaceholder
            desc={description}
            isSelected={isSelected}
            href={href}
            notLive={isLiveMsg}
          />
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
