import type { Metadata } from "next";
import Slaughter from "../../_pages/Slaughter/Slaughter";

export const metadata: Metadata = {
  title: "Забій кролів",
  description:
    "Забій кролів: підготовка до забою, гуманні методи, обробка туші, зняття шкурки, розбирання м'яса, правила гігієни, зберігання продукції та практичні рекомендації для кролівників.",
};

export default function Page() {
  return <Slaughter />;
}
