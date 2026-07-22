import type { Metadata } from "next";
import RabbitsAndChickens from "../../_pages/RabbitsAndChickens/RabbitsAndChickens";

export const metadata: Metadata = {
  title: "Чи можна утримувати кролів і курей разом",
  description:
    "Чи можна утримувати кролів і курей разом: переваги та недоліки спільного утримання, ризики передачі хвороб, особливості годівлі, санітарні вимоги та рекомендації для безпечного господарства.",
};

export default function Page() {
  return <RabbitsAndChickens />;
}
