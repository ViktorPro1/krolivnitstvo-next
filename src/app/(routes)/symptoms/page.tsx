import type { Metadata } from "next";
import Symptoms from "../../_pages/Symptoms/Symptoms";

export const metadata: Metadata = {
  title: "Симптоми хвороб у кролів",
  description:
    "Симптоми хвороб у кролів: основні ознаки захворювань, зміни поведінки, апетиту, дихання, випорожнень, температури тіла та інші симптоми, які допоможуть вчасно виявити проблему.",
};

export default function Page() {
  return <Symptoms />;
}
