import type { Metadata } from "next";
import Vaccinations from "../../_pages/Vaccinations/Vaccinations";

export const metadata: Metadata = {
  title: "Вакцинація кролів",
  description:
    "Вакцинація кролів: календар щеплень, які хвороби запобігають вакцини, оптимальний вік для вакцинації, ревакцинація, підготовка до щеплення та догляд після вакцинації.",
};

export default function Page() {
  return <Vaccinations />;
}
