import type { Metadata } from "next";
import BreedingEvaluation from "../../_pages/BreedingEvaluation/BreedingEvaluation";

export const metadata: Metadata = {
  title: "Оцінка племінної цінності кролів",
  description:
    "Оцінка племінної цінності кролів: критерії відбору, продуктивність, генетичні показники, екстер'єр та рекомендації для формування якісного племінного стада.",
};

export default function Page() {
  return <BreedingEvaluation />;
}
