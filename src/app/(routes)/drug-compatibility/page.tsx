import type { Metadata } from "next";
import DrugCompatibility from "../../_pages/DrugCompatibility/DrugCompatibility";

export const metadata: Metadata = {
  title: "Сумісність лікарських препаратів",
  description:
    "Сумісність лікарських препаратів для кролів: які засоби можна поєднувати, можливі взаємодії, протипоказання та рекомендації щодо безпечного застосування.",
};

export default function Page() {
  return <DrugCompatibility />;
}
