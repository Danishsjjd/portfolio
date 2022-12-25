import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Card as CardData } from "../../constants/card";
import { useScrollConstraints } from "../../hooks/useScrollConstrain";
import { useWheelScroll } from "../../hooks/useWheelScroll";
import { closeSpring, openSpring } from "./animation";
import { ContentPlaceholder } from "./ContactPlaceHolder";
import { Image } from "./Image";
import { Title } from "./Title";

const dismissDistance = 30;

const Card = ({ id, title, description, img }: CardData) => {
  const param = useParams();
  const isSelected = param.id === id;

  const navigate = useNavigate();
  const y = useMotionValue(0);
  const zIndex = useMotionValue(isSelected ? 10 : 0);
  const [overflow, setOverflow] = useState(true);

  const cardRef = useRef(null);
  const constraints = useScrollConstraints(cardRef, isSelected);

  function checkSwipeToDismiss() {
    y.get() > dismissDistance && navigate("/");
  }

  function checkZIndex() {
    if (isSelected) {
      zIndex.set(99999);
      setOverflow(false);
    } else {
      zIndex.set(0);
      setOverflow(true);
    }
  }

  useEffect(() => {
    if (isSelected) checkZIndex();
    else animate(y, 0);
  }, [isSelected]);

  const containerRef = useRef(null);
  useWheelScroll(containerRef, y, constraints, checkSwipeToDismiss, isSelected);

  return (
    <motion.li
      ref={containerRef}
      className={`relative h-96 w-full rounded-2xl  lg:h-[340px] ${
        overflow
          ? "cu-li overflow-hidden outline outline-2 outline-white/0 transition-all duration-300 hover:outline-offset-2 hover:outline-gray-300"
          : ""
      }`}
      layout
      style={{ zIndex }}
    >
      <Overlay isSelected={isSelected} />
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
          <ContentPlaceholder desc={description} isSelected={isSelected} />
        </motion.div>
      </motion.div>
      {!isSelected && (
        <Link to={`/project/${id}`} className={"absolute inset-0"} />
      )}
      <Title title={title} isSelected={isSelected} />
    </motion.li>
  );
};

const Overlay = ({ isSelected }: { isSelected: boolean }) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0, transition: { duration: 0.5 } }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? "auto" : "none" }}
    className="fixed inset-0 z-10  bg-black/80"
  >
    <Link to="/" className="absolute inset-0" />
  </motion.div>
);

export default Card;
