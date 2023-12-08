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
    text: "Menu",
    link: "/menu/salads",
    // private: true,
  },
  {
    id: nanoid(),
    text: "Delivery",
    link: "/delivery",
    // private: true,
  },
  {
    id: nanoid(),
    text: "Reviews",
    link: "/reviews",
    // private: true,
  },
  {
    id: nanoid(),
    text: "Contacts",
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
