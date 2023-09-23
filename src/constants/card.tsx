import besnik from "../assets/images/card-cover/besnik.jpg"
import expice from "../assets/images/card-cover/expice.jpg"
import fitClub from "../assets/images/card-cover/fitclub.jpg"
import houseToHome from "../assets/images/card-cover/house-to-home.jpg"
import wibeStudio from "../assets/images/card-cover/wibe-studio.jpg"
import hokoha from "../assets/images/card-cover/hokoha.jpg"
import blockmuncher from "../assets/images/card-cover/blockmuncher.jpg"
import food from "../assets/images/card-cover/food.jpg"

export type Card = {
  id: string
  img: string
  title: string
  description: string
  href: string
  ifNotLiveMsg?: string
}

export const cards: Card[] = [
  {
    img: fitClub,
    title: "Fit Club",
    description:
      "This website is for fitness club. I implement CSS, animations, and slider to make user experience better so user spend there most of time. It works on both Android and iOS",
    href: "https://fitclub-danishsjjd.netlify.app/",
    id: crypto.randomUUID(),
  },
  {
    img: wibeStudio,
    title: "Wibe Studio",
    description:
      "TODO: HAVE TO WRITE IT:- This website is for fitness club. I implement CSS, animations, and slider to make user experience better so user spend there most of time. It works on both Android and iOS",
    href: "https://wibe-studio-danishsjjd.netlify.app/",
    id: crypto.randomUUID(),
  },
  {
    img: blockmuncher,
    title: "Muncher Universe",
    description:
      "I have built this website from scratch, which is designed exclusively for tablet screens. The functionality of this website includes BTC inscriptions.",
    href: "https://blockmunchers.com/",
    id: crypto.randomUUID(),
  },
  {
    img: expice,
    title: "Expice",
    description:
      "This is a food ordering app you can buy food & it's fully responsive. I found this design on the internet and challenge myself to create this design and functionality.",
    href: "https://expice-danishsjjd.netlify.app/",
    id: "d",
  },
  {
    img: hokoha,
    title: "Hokoha Clone",
    description:
      "I have created a Hokoha clone as per the demand and integrated emailjs so users can submit forms, and I've also integrated Google Maps. The website is fully responsive and is built with great tools like React, Tailwind, and Vite",
    href: "https://hokoha-clone.netlify.app/",
    id: crypto.randomUUID(),
  },
  {
    img: food,
    title: "Food template",
    description:
      "I have created the frontend template for the food web app which is fully response and build with tredentional technology like HTML, CSS, JS",
    href: "https://food-danishsjjd.netlify.app/",
    id: crypto.randomUUID(),
  },
  {
    img: besnik,
    title: "Besnik",
    description:
      "This website is developed in ReactJs, you can easily buy or rent a house. It works on both Android and iOS.",
    href: "https://besnik-danishsjjd.netlify.app/",
    id: crypto.randomUUID(),
  },
  {
    img: houseToHome,
    title: "House To Home",
    description:
      "This is a full-stack website I create using Reactjs, tailwindcss for the front-end, and for the backend, I use nodejs & expressJs for API, and for the payment method, I use stripe. This website also has an admin dashboard so the admin can add, delete or update products and also admin can remove users and reviews from products. It works on both Android and iOS. You can buy, review or track your product and much more",
    href: "https://house-to-home.herokuapp.com/",
    ifNotLiveMsg: "404 (Not Found)",
    id: crypto.randomUUID(),
  },
]
