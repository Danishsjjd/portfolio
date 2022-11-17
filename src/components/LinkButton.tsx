import { Dispatch, SetStateAction } from "react";
import { Link } from "react-scroll";

type Props = {
  children: string;
  to: string;
  className?: string;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
};

const LinkButton = ({ children, to, className, setIsOpen }: Props) => {
  return (
    <button className="scale-100 transition active:scale-75">
      <Link
        to={`${to}`}
        spy
        activeClass={"animate-bg underline"}
        offset={-200}
        className={`rounded-md p-4 font-medium text-yellow hover:animate-bg hover:underline ${
          className ? className : ""
        }`}
        onClick={() => {
          window.history.pushState(null, "", `#${to}`);
          if (setIsOpen) setIsOpen(false);
        }}
      >
        {children}
      </Link>
    </button>
  );
};

export default LinkButton;
