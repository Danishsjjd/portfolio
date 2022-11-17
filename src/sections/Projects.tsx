import { Card, cards } from "../constants/card";

const Projects = () => {
  return (
    <div className="mx-auto max-w-7xl px-8" id="Project">
      <h3 className="text-left text-3xl font-medium underline">Projects</h3>
      <div className="relative mt-10 grid grid-cols-3 gap-6">
        {cards.map(({ description, img, title, href }) => (
          <SingleCard
            description={description}
            img={img}
            title={title}
            key={title}
            href={href}
          />
        ))}
      </div>
    </div>
  );
};

function SingleCard({ description, img, title, href }: Card) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      // @ts-ignore
      style={{ "--image-url": `url(${img})` }}
      className={`card group relative block h-80 overflow-hidden rounded-lg outline outline-2 -outline-offset-8 outline-white/0 transition-all duration-300 before:bg-[image:var(--image-url)] focus-within:outline-offset-2 focus-within:outline-gray-300 focus-within:before:blur-[1px] hover:z-30 hover:outline-offset-2 hover:outline-gray-300 hover:before:blur-[1px]`}
      target={"_blank"}
    >
      <div className="card-content relative flex h-full w-full flex-col items-start justify-end p-6 font-Lexend">
        <h2 className="title rounded px-2 py-1 text-2xl font-semibold backdrop-blur-sm group-hover:bg-black/0 group-hover:!p-0 group-hover:underline sm:bg-black/70">
          {title}
        </h2>
        <p className=" text-xl font-medium text-yellow">{description}</p>
      </div>
    </a>
  );
}

export default Projects;
