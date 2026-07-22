import type { Metadata } from "next";
import ReplacementStock from "../../_pages/ReplacementStock/ReplacementStock";

export const metadata: Metadata = {
  title: "Ремонтний молодняк кролів",
  description:
    "Ремонтний молодняк кролів: як правильно відбирати молодих кролів для заміни основного поголів'я, критерії відбору, вік, продуктивність, здоров'я, племінна цінність та рекомендації щодо вирощування.",
};

export default function Page() {
  return <ReplacementStock />;
}
