import type { Metadata } from "next";
import BeginnerMistakes from "../../_pages/BeginnerMistakes/BeginnerMistakes";

export const metadata: Metadata = {
  title: "Типові помилки початківців",
  description:
    "Найпоширеніші помилки початківців у кролівництві, як їх уникнути та забезпечити правильне утримання, годівлю й догляд за кролями.",
};

export default function Page() {
  return <BeginnerMistakes />;
}
