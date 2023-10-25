import { nanoid } from "nanoid";

const items = [
  {
    id: nanoid(),
    text: "personalInformation",
    link: "/user/personalInformation",

    // private: false,
  },
  {
    id: nanoid(),
    text: "bonuses",
    link: "/user/bonuses",
    component: "../../modules/User/Bonuses/Bonuses.jsx",
    // private: true,
  },
  {
    id: nanoid(),
    text: "favorite",
    link: "/user/favorite",
    component: "../../modules/User/Favorite/Favorite.jsx",
    // private: true,
  },
  {
    id: nanoid(),
    text: "orderHistory",
    link: "/user/orderHistory",
    component: "<OrderHistory/>",
    // private: true,
  },
  {
    id: nanoid(),
    text: "savedAddresses",
    link: "/user/savedAddresses",
    component: "<SavedAddresses/>",
    // private: true,
  },
  {
    id: nanoid(),
    text: "ratingsAndReviews",
    link: "/user/ratingsAndReviews",
    // private: true,
  },
];

export default items;
