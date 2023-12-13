import { nanoid } from "nanoid";
const items = [
  {
    id: nanoid(),
    q: "How long does delivery usually take?",
    a: "Delivery times can vary depending on your location and the current order volume. Typically, our deliveries are completed within 30 to 45 minutes from the time your order is confirmed. However, during peak hours or adverse weather conditions, it may take a bit longer.",
  },
  {
    id: nanoid(),
    q: "What are your delivery hours?",
    a: "Our delivery hours vary depending on your location. Typically, we provide delivery services from 10:00 a.m. to 10:00 p.m., Monday through Sunday. We aim to offer flexible delivery schedules to accommodate your needs at any time of the day.",
  },
  {
    id: nanoid(),
    q: "How can I track my order?",
    a: "To track your order, simply log in to your account on our websiteor mobile app. Go to the 'My Orders' section, select the relevant order, and you'll see the current delivery status. You'll also receive notifications at key delivery milestones. If you have any questions, our support team is always ready to assist!",
  },
  {
    id: nanoid(),
    q: "Is it possible to order in advance or subscribe to the weekly menu?",
    a: "Delivery times can vary depending on your location and the current order volume. Typically, our deliveries are completed within 30 to 45 minutes from the time your order is confirmed. However, during peak hours or adverse weather conditions, it may take a bit longer.",
  },
  {
    id: nanoid(),
    q: "What if my order is late or my meals are damaged during delivery?",
    a: "If your order is late or your meals are damaged during delivery, please contact our customer support immediately. We will work to resolve the issue promptly and ensure you receive fresh and high-quality meals. Your satisfaction is our priority!",
  },
];

export default items;
