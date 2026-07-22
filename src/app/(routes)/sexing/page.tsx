import type { Metadata } from "next";
import Sexing from "../../_pages/Sexing/Sexing";

export const metadata: Metadata = {
  title: "Як визначити стать кроля",
  description:
    "Як визначити стать кроля: покрокова інструкція для кроленят і дорослих кролів, відмінності між самцем і самкою, у якому віці можна визначити стать та найпоширеніші помилки.",
};

export default function Page() {
  return <Sexing />;
}
