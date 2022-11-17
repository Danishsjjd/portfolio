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
    <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2 px-8">
      {links.map(({ href, title }) => (
        <button key={title}>
          <a href=""></a>
        </button>
      ))}
    </div>
  );
};
export default Contact;
