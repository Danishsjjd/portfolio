import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";

import Card from "../components/card/Card";
import { Card as CardType, cards } from "../constants/card";

const Projects = () => {
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (card: CardType) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = card.img;
        loadImg.onload = () => resolve(card.img);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(cards.map((card) => loadImage(card)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-8 pt-44" id="Projects">
      <h3 className="text-left text-3xl font-medium underline">Projects</h3>
      {imgsLoaded ? (
        <>
          <ul className="relative mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {cards.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </ul>
          <ul className="relative mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {cards.map((card) => (
              <SingleCard key={card.id} {...card} />
            ))}
          </ul>
        </>
      ) : (
        <div className="flex items-center justify-center">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="40"
            visible={true}
          />
        </div>
      )}
    </div>
  );
};

function SingleCard({ description, img, title, href, isLiveMsg }: CardType) {
  const isLive = !isLiveMsg;
  return (
    <a
      href={isLive ? href : "#Projects"}
      rel="noopener noreferrer"
      style={{ "--image-url": `url(${img})` } as React.CSSProperties}
      className={`card group relative block h-96 overflow-hidden rounded-lg outline outline-2 -outline-offset-8 outline-white/0 transition-all duration-300 before:bg-[image:var(--image-url)] focus-within:outline-offset-2 focus-within:outline-gray-300 hover:z-30 hover:outline-offset-2 hover:outline-gray-300 sm:focus-within:before:blur-[1px] sm:hover:before:blur-[1px] lg:h-[340px]`}
      target={isLive ? "_blank" : "_self"}
      onClick={() => {
        if (isLiveMsg) toast.error(isLiveMsg, { position: "top-center" });
      }}
    >
      <div className="card-content relative flex h-full w-full flex-col items-start justify-end font-Lexend ">
        <h2 className="title mx-3 rounded bg-black/70 px-2 py-1 text-xl font-semibold decoration-yellow line-clamp-1 group-focus-within:bg-black/0 group-focus-within:!p-0 group-focus-within:underline group-hover:underline sm:backdrop-blur-sm sm:group-hover:bg-black/0 sm:group-hover:!p-0 lg:text-2xl">
          {title}
        </h2>
        <p className="!mt-0 max-h-56 touch-pan-y overflow-y-auto overscroll-contain p-3 text-lg font-medium text-yellow sm:max-h-32 sm:min-h-[128px] sm:text-xl sm:group-focus-within:max-h-64 sm:group-focus-within:min-h-min sm:group-hover:max-h-64 sm:group-hover:min-h-min lg:p-6">
          {description}
        </p>
      </div>
    </a>
  );
}

export default Projects;
