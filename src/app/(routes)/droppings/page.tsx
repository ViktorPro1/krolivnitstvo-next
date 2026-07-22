import type { Metadata } from "next";
import Droppings from "../../_pages/Droppings/Droppings";

export const metadata: Metadata = {
  title: "Послід кролів: оцінка здоров'я",
  description:
    "Послід кролів як показник здоров'я: норма, можливі відхилення, причини змін, діагностика захворювань та рекомендації для кролівників.",
};

export default function Page() {
  return <Droppings />;
}
