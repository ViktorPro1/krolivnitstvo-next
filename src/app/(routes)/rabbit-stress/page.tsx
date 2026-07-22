import type { Metadata } from "next";
import RabbitStress from "../../_pages/RabbitStress/RabbitStress";

export const metadata: Metadata = {
  title: "Стрес у кролів",
  description:
    "Стрес у кролів: причини, ознаки, вплив на здоров'я та продуктивність, способи зменшення стресу, профілактика та створення комфортних умов утримання.",
};

export default function Page() {
  return <RabbitStress />;
}
