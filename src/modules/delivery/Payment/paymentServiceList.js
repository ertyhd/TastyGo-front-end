import { nanoid } from "nanoid";

const items = [
  {
    id: nanoid(),
    title: "Terminal Payment",
    text: "Pay with visa or mastercard at the time of delivery",
    svgId: "terminal",
  },
  {
    id: nanoid(),
    title: "Cash On Delivery",
    text: "Pay in cash at the time of delivery",
    svgId: "cash",
  },
  {
    id: nanoid(),
    title: "Pay online",
    text: "Pay with visa or mastercard now",
    svgId: "online",
  },
];

export default items;
