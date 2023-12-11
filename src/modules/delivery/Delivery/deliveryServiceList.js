import { nanoid } from "nanoid";

const items = [
  {
    id: nanoid(),
    title: "Free delivery on orders over $15",
    text: "Indulge in your favorite dishes from Tasty Go and enjoy the added perk of free delivery when your order totals $50 or more.",
    svgId: "free",
  },
  {
    id: nanoid(),
    title: "Working hours from 10:00 a.m. to 10:00 p.m.",
    text: "Tasty Go is at your service from 10:00 AM to 10:00 PM. Both our pickup and delivery points are operating during these hours. ",
    svgId: "working",
  },
  {
    id: nanoid(),
    title: "Delivery within Kyiv",
    text: "We offer fast and convenient delivery service throughout Kyiv, so you can enjoy your favorite meals without leaving the comfort of your home or workplace. ",
    svgId: "delivery",
  },
  {
    id: nanoid(),
    title: "Self-pickup location",
    text: "If you prefer to pick up your order in person, we have a convenient self-pickup option available. Visit our pickup location at: Kyiv, st.Shevchenka, 98",
    svgId: "self",
  },
  {
    id: nanoid(),
    title: "Delivery to your doorstep within an hour (standard)",
    text: "At Tasty Go, we pride ourselves on our standard one-hour delivery,  but there may be occasional minor delays due to unexpected factors or high demand.",
    svgId: "postman",
  },
];

export default items;
