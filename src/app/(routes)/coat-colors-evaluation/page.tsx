import type { Metadata } from "next";
import CoatColorsEvaluation from "../../_pages/CoatColorsEvaluation/CoatColorsEvaluation";

export const metadata: Metadata = {
  title: "Оцінка забарвлення шерсті кролів",
  description:
    "Оцінка забарвлення шерсті кролів: стандарти мастей, особливості кольорів, породні вимоги та критерії оцінювання.",
};

export default function Page() {
  return <CoatColorsEvaluation />;
}
