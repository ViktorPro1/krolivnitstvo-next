import type { Metadata } from "next";
import FAQ from "../../_pages/FAQ/FAQ";

export const metadata: Metadata = {
  title: "Часті запитання (FAQ)",
  description:
    "Відповіді на найпоширеніші запитання про кролівництво: утримання, годівля, розведення, лікування, вакцинація та догляд за кролями.",
};

export default function Page() {
  return <FAQ />;
}
