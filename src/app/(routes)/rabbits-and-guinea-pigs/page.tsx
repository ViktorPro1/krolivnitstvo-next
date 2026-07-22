import type { Metadata } from "next";
import RabbitsAndGuineaPigs from "../../_pages/RabbitsAndGuineaPigs/RabbitsAndGuineaPigs";

export const metadata: Metadata = {
  title: "Чи можна утримувати кролів і морських свинок разом",
  description:
    "Чи можна утримувати кролів і морських свинок разом: сумісність тварин, можливі ризики, особливості поведінки, відмінності у харчуванні, захворювання та рекомендації щодо безпечного утримання.",
};

export default function Page() {
  return <RabbitsAndGuineaPigs />;
}
