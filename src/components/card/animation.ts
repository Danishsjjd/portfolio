import { Transition } from "framer-motion"

export const openSpring: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 30,
}
export const closeSpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 35,
}
