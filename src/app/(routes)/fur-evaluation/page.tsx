import type { Metadata } from "next";
import FurEvaluation from "../../_pages/FurEvaluation/FurEvaluation";

export const metadata: Metadata = {
  title: "Оцінка хутра кролів",
  description:
    "Оцінка хутра кролів: густота, структура, блиск, якість волосяного покриву, породні особливості та критерії оцінювання.",
};

export default function Page() {
  return <FurEvaluation />;
}
