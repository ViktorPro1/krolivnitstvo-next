import type { Metadata } from "next";
import BreedStandards from "../../_pages/BreedStandards/BreedStandards";

export const metadata: Metadata = {
  title: "Стандарти порід кролів",
  description:
    "Стандарти порід кролів: опис, основні характеристики, вимоги до екстер'єру, ваги, забарвлення та породних особливостей.",
};

export default function Page() {
  return <BreedStandards />;
}
