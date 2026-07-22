import type { Metadata } from "next";
import RabbitConformation from "../../_pages/RabbitConformation/RabbitConformation";

export const metadata: Metadata = {
  title: "Екстер'єр кролів",
  description:
    "Екстер'єр кролів: оцінка будови тіла, пропорцій, постави, голови, вух, кінцівок і шерсті. Основні критерії оцінки відповідності породним стандартам.",
};

export default function Page() {
  return <RabbitConformation />;
}
