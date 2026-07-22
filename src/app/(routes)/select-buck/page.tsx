import type { Metadata } from "next";
import SelectBuck from "../../_pages/SelectBuck/SelectBuck";

export const metadata: Metadata = {
  title: "Як вибрати самця кроля для розведення",
  description:
    "Як вибрати самця кроля для розведення: критерії відбору виробника, оцінка здоров'я, генетики, продуктивності, походження, фертильності та рекомендації для успішної племінної роботи.",
};

export default function Page() {
  return <SelectBuck />;
}
