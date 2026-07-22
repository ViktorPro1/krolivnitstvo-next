import type { Metadata } from "next";
import WaterMedication from "../../_pages/WaterMedication/WaterMedication";

export const metadata: Metadata = {
  title: "Додавання ліків у воду для кролів",
  description:
    "Додавання ліків у воду для кролів: правила приготування розчинів, правильне дозування, особливості випоювання, поширені помилки, рекомендації та заходи безпеки.",
};

export default function Page() {
  return <WaterMedication />;
}
