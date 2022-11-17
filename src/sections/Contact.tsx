import arrow from "../assets/images/arrow.svg";
type Links = {
  title: string;
  href: string;
};

const links: Links[] = [
  { title: "Email", href: "mailto:danishsjjad@gmail.com" },
  { title: "WhatsApp", href: "https://wa.me/923011800058" },
  { title: "Twitter", href: "https://twitter.com/Danishsjjd" },
  { title: "GitHub", href: "https://github.com/danishsjjd/" },
];

const Contact = () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-28" id="Contact">
      <h2 className="mb-14 text-center text-3xl font-bold underline">
        Contact
      </h2>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {links.map(({ href, title }) => (
          <button className="scale-100 transition active:scale-75">
            <a
              href={href}
              target={"_blank"}
              rel="noopener noreferrer"
              className="flex rounded-md py-3 pr-6 pl-3 text-xl font-medium text-yellow underline hover:animate-bg hover:decoration-wavy"
            >
              <span>{title}</span>
              <img src={arrow} alt="arrow" />
            </a>
          </button>
        ))}
      </div>
    </div>
  );
};
export default Contact;
