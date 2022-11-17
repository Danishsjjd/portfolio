import logo from "../assets/images/logo.svg";
import Button from "../components/Button";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="relative w-full border-t-2 border-t-gray-400 pt-14 pb-8">
      <div className="relative mx-auto flex max-w-3xl flex-col items-center justify-center gap-1">
        <img src={logo} alt="Logo" className="w-20" />
        <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          back to top
        </Button>
        <p>
          © {new Date().getFullYear().toString()} Danish Sajjad. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
