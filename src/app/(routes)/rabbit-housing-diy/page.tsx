import type { Metadata } from "next";
import RabbitHousingDIY from "../../_pages/RabbitHousingDIY/RabbitHousingDIY";

export const metadata: Metadata = {
  title: "Клітки для кролів своїми руками",
  description:
    "Клітки для кролів своїми руками: креслення, матеріали, розміри, покрокове виготовлення, облаштування, утеплення та практичні поради для домашнього кролівництва.",
};

export default function Page() {
  return <RabbitHousingDIY />;
}
