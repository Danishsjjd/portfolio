import logo from "../assets/images/logo.svg";
import LinkButton from "../components/LinkButton";

const links = ["About", "Project", "Contact"];

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="relative top-2 mx-auto flex max-w-6xl justify-between rounded-3xl bg-black/50 p-7 backdrop-blur-md">
        <div>
          <a href="#">
            <img src={logo} alt="logo" className="aspect-square w-8" />
          </a>
        </div>
        <div className="flex items-center gap-3 divide-x-2 divide-yellow/40">
          <div>
            <ul className="flex gap-3">
              {links.map((link) => (
                <li key={link}>
                  <LinkButton to={link}>{link}</LinkButton>
                </li>
              ))}
            </ul>
          </div>
          <div className="pl-5">icon icon</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
