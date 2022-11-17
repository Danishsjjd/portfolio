import { Link } from "react-scroll";

import logo from "../assets/images/logo.svg";
import Dropdown from "../components/Dropdown";
import LinkButton from "../components/LinkButton";
import barsSolid from "../assets/images/bars-solid.svg";

const links: string[] = ["About", "Projects"];

const GlowBtn = () => (
  <button className="btn-glow px-3 uppercase text-yellow">
    <Link to="Contact">Contact</Link>
  </button>
);

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-12">
        <div className="relative top-2 flex w-full items-center  justify-between rounded-3xl bg-black/50 p-4 backdrop-blur-md">
          <div>
            <a href="#">
              <img src={logo} alt="logo" className="aspect-square w-8" />
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
  );
};

export default Header;
