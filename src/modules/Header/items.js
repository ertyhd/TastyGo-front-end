import { nanoid } from "nanoid";

const items = [
  {
    id: nanoid(),
    text: "Home",
    link: "/",
    // private: false,
  },
  {
    id: nanoid(),
    text: "menu",
    link: "/menu",
    // private: true,
  },
  {
    id: nanoid(),
    text: "delivery",
    link: "/delivery",
    // private: true,
  },
  {
    id: nanoid(),
    text: "Reviews",
    link: "/Reviews",
    // private: true,
  },
  {
    id: nanoid(),
    text: "contacts",
    link: "/contacts",
    // private: true,
  },
];

export default items;
