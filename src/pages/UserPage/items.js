import { nanoid } from "nanoid";

const items = [
  {
    id: nanoid(),
    text: "personal information",
    link: "/user/personal-info",

    // private: false,
  },
  {
    id: nanoid(),
    text: "bonuses",
    link: "/user/bonuses",
    // private: true,
  },
  {
    id: nanoid(),
    text: "favorite",
    link: "/user/favorite",
    // private: true,
  },
  {
    id: nanoid(),
    text: "order history",
    link: "/user/history",
    // private: true,
  },
  {
    id: nanoid(),
    text: "saved addresses",
    link: "/user/addresses",
    // private: true,
  },
  {
    id: nanoid(),
    text: "ratings and reviews",
    link: "/user/ratings-reviews",
    // private: true,
  },
];

export default items;
