import type { Metadata } from "next";
import Weaning from "../../_pages/Weaning/Weaning";

export const metadata: Metadata = {
  title: "Відлучення кроленят",
  description:
    "Відлучення кроленят від кролиці: оптимальний вік, підготовка, правила переведення на самостійне утримання, годівля після відлучення, профілактика стресу та можливих захворювань.",
};

export default function Page() {
  return <Weaning />;
}
