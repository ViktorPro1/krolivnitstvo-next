import type { Metadata } from "next";
import Subscription from "../../_pages/Subscription/Subscription";

export const metadata: Metadata = {
  title: "Підписка на Кролівництво від А до Я",
  description:
    "Оформіть підписку на «Кролівництво від А до Я» та отримайте доступ до повної бази знань, калькуляторів, журналів обліку, практичних інструментів і нових матеріалів для кролівників.",
};

export default function Page() {
  return <Subscription />;
}
