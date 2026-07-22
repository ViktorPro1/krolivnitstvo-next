import type { Metadata } from "next";
import Diseases from "../../_pages/Diseases/Diseases";

export const metadata: Metadata = {
  title: "Хвороби кролів",
  description:
    "Хвороби кролів: симптоми, причини, діагностика, лікування, профілактика та практичні рекомендації щодо збереження здоров'я поголів'я.",
};

export default function Page() {
  return <Diseases />;
}
