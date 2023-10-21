import { nanoid } from "nanoid";

const items = [
  {
    id: nanoid(),
    text: "personalInformation",
    link: "/personalInformation",
    // private: false,
  },
  {
    id: nanoid(),
    text: "bonuses",
    link: "/bonuses",
    // private: true,
  },
  {
    id: nanoid(),
    text: "favorite",
    link: "/favorite",
    // private: true,
  },
  {
    id: nanoid(),
    text: "orderHistory",
    link: "/orderHistory",
    // private: true,
  },
  {
    id: nanoid(),
    text: "savedAddresses",
    link: "/savedAddresses",
    // private: true,
  },
  {
    id: nanoid(),
    text: "ratingsAndReviews",
    link: "/ratingsAndReviews",
    // private: true,
  },
];

export default items;
