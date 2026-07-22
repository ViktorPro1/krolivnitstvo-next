import type { Metadata } from "next";
import NewFood from "../../_pages/NewFood/NewFood";

export const metadata: Metadata = {
  title: "Введення нового корму для кролів",
  description:
    "Введення нового корму для кролів: як безпечно змінювати раціон, поступовий перехід на нові корми, профілактика розладів травлення та корисні рекомендації.",
};

export default function Page() {
  return <NewFood />;
}
