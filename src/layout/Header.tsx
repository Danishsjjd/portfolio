import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from "react"
import { Link } from "react-scroll"

import Dropdown from "../app/_components/Dropdown"
import LinkButton from "../app/_components/LinkButton"
import logo from "../assets/images/logo.png"

const links: string[] = ["About", "Projects"]

const GlowBtn = () => (
  <button className="btn-glow !cursor-default px-3 uppercase text-yellow">
    <Link to="Contact" className="grid h-full w-full cursor-pointer place-items-center">
      Contact
    </Link>
  </button>
)

const Header = ({
  isGoingUp,
  setIsGoingUp,
  isCardActive,
}: {
  isGoingUp: boolean
  setIsGoingUp: Dispatch<SetStateAction<boolean>>

  isCardActive: boolean
}) => {
  let scroll = useRef(0)

  const activeLink = useCallback(() => {
    if (window.scrollY > scroll.current && !isCardActive) setIsGoingUp(false)
    else setIsGoingUp(true)

    scroll.current = window.scrollY
  }, [])

  useEffect(() => {
    window.scrollTo({
      top: document.getElementById(window.location.hash.slice(1))?.offsetTop,
      behavior: "smooth",
    })
    window.addEventListener("scroll", activeLink)
    return () => {
      window.removeEventListener("scroll", activeLink)
    }
  }, [activeLink])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isGoingUp ? "translate-y-0" : "-translate-y-[110%]"}`}
    >
      <div className="mx-auto max-w-6xl px-12">
        <div className="relative top-2 flex w-full items-center  justify-between rounded-3xl bg-black/50 p-4 backdrop-blur-md">
          <div>
            <a href="#">
              <img src={logo} alt="logo" className="h-auto w-14" />
            </a>
          </div>
          {/* mobile */}
          <div className="block sm:hidden">
            <Dropdown tags={[...links, "Contact"]} />
          </div>
          {/* desktop & tablets */}
          <div className="hidden items-center gap-3 divide-x-2 divide-yellow/40 sm:flex ">
            <div>
              <ul className="flex gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <LinkButton to={link}>{link}</LinkButton>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pl-5">
              <GlowBtn />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
