import besnik from "../assets/images/card-cover/besnik.jpg";
import expice from "../assets/images/card-cover/expice.jpg";
import fitClub from "../assets/images/card-cover/fitclub.jpg";
import gfox from "../assets/images/card-cover/gfox.jpg";
import hacks from "../assets/images/card-cover/hacks.jpg";
import houseToHome from "../assets/images/card-cover/house-to-home.jpg";
import mcafee from "../assets/images/card-cover/mcafee.jpg";

export type Card = {
  img: string;
  title: string;
  description: string;
  href: string;
};

export const cards: Card[] = [
  {
    img: houseToHome,
    title: "House To Home",
    description:
      "this is the best website ever you see on the internet thanks to danish.",
    href: "https://house-to-home.herokuapp.com/",
  },
  {
    img: besnik,
    title: "Besnik",
    description:
      "this is the best website ever you see on the internet thanks to danish.",
    href: "https://besnik-danishsjjd.netlify.app/",
  },
  {
    img: expice,
    title: "Expice",
    description:
      "this is the best website ever you see on the internet thanks to danish.",
    href: "https://expice-danishsjjd.netlify.app/",
  },
  {
    img: fitClub,
    title: "Fit Club",
    description:
      "this is the best website ever you see on the internet thanks to danish.",
    href: "https://fitclub-danishsjjd.netlify.app/",
  },
  {
    img: gfox,
    title: "GFOX",
    description:
      "this is the best website ever you see on the internet thanks to danish.",
    href: "https://gfox-danishsjjd.netlify.app/",
  },
  {
    img: hacks,
    title: "Hacks",
    description:
      "this is the best website ever you see on the internet thanks to danish.",
    href: "https://hacks-danishsjjd.netlify.app/",
  },

  {
    img: mcafee,
    title: "Mcafee",
    description:
      "this is the best website ever you see on the internet thanks to danish.",
    href: "https://mcafee-danishsjjd.netlify.app/",
  },
];
