import type { Metadata } from "next";
import MatingFrequency from "../../_pages/MatingFrequency/MatingFrequency";

export const metadata: Metadata = {
  title: "Частота парування кролів",
  description:
    "Частота парування кролів: оптимальні інтервали між паруваннями, навантаження на самців і кролиць, планування розведення та рекомендації для здорового потомства.",
};

export default function Page() {
  return <MatingFrequency />;
}
