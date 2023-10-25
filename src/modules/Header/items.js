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
    text: "reviews",
    link: "/reviews",
    // private: true,
  },
  {
    id: nanoid(),
    text: "contacts",
    link: "/contacts",
    // private: true,
  },
  // {
  //   id: nanoid(),
  //   text: "user",
  //   link: "/user",
  //   // private: true,
  // },
];

export default items;
