import type { Metadata } from "next";
import RabbitsAndChildren from "../../_pages/RabbitsAndChildren/RabbitsAndChildren";

export const metadata: Metadata = {
  title: "Кролі та діти",
  description:
    "Кролі та діти: як безпечно знайомити дитину з кроликом, правила спілкування, догляд за домашнім улюбленцем, відповідальність, гігієна та поради для сімей із дітьми.",
};

export default function Page() {
  return <RabbitsAndChildren />;
}
