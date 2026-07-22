import type { Metadata } from "next";
import ShowScoring from "../../_pages/ShowScoring/ShowScoring";

export const metadata: Metadata = {
  title: "Оцінювання кролів на виставках",
  description:
    "Оцінювання кролів на виставках: критерії експертної оцінки, стандарти порід, система нарахування балів, підготовка кролів до виставки та поради для успішної участі.",
};

export default function Page() {
  return <ShowScoring />;
}
