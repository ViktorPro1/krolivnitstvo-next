import type { Metadata } from "next";
import DoePreparation from "../../_pages/DoePreparation/DoePreparation";

export const metadata: Metadata = {
  title: "Підготовка кролиці до парування",
  description:
    "Підготовка кролиці до парування: оцінка стану здоров'я, годівля, оптимальний вік, кондиція тварини та рекомендації для успішного запліднення.",
};

export default function Page() {
  return <DoePreparation />;
}
