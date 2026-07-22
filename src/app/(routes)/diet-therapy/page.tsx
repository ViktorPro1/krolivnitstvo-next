import type { Metadata } from "next";
import DietTherapy from "../../_pages/DietTherapy/DietTherapy";

export const metadata: Metadata = {
  title: "Дієтотерапія для кролів",
  description:
    "Дієтотерапія для кролів: лікувальне харчування, коригування раціону при захворюваннях, відновлення після хвороб та рекомендації щодо правильного годування.",
};

export default function Page() {
  return <DietTherapy />;
}
