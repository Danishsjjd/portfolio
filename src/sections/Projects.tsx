import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
type Props = {};

const Projects = (props: Props) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.map((card) => {
      if (card)
        VanillaTilt.init(card, {
          max: 25,
          speed: 400,
          glare: true,
          "max-glare": 0.3,
        });
    });
  }, [cardRefs.current]);
  return (
    <div className="mx-auto max-w-7xl px-8">
      <h3 className="text-left text-3xl font-medium underline">Projects</h3>
      {/* card */}
      <div className="relative grid grid-cols-3 gap-14" data-tilt>
        <div
          className="group relative flex items-start justify-end overflow-hidden rounded-md border-2 border-white [&>*]:transition [&>*]:duration-300"
          ref={(el) => cardRefs?.current?.push(el)}
        >
          <img
            src="http://source.unsplash.com/random"
            className="absolute inset-0 blur-0 group-hover:blur-md"
          />
          <div className="translate-y-[100%] p-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            <h2>MUSSELS SOUP</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#">Order Now</a>
          </div>
        </div>
        {/* card end */}
      </div>
    </div>
  );
};

export default Projects;
