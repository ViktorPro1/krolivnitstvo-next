import type { Metadata } from "next";
import TermsOfUse from "../../_pages/Info/TermsOfUse/TermsOfUse";

export const metadata: Metadata = {
  title: "Умови використання",
  description:
    "Умови використання сайту «Кролівництво від А до Я»: правила користування сервісом, права та обов'язки користувачів, інтелектуальна власність, обмеження відповідальності та інші юридичні положення.",
};

export default function Page() {
  return <TermsOfUse />;
}
