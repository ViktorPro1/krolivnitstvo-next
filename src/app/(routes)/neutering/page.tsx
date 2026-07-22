import type { Metadata } from "next";
import Neutering from "../../_pages/Neutering/Neutering";

export const metadata: Metadata = {
  title: "Кастрація та стерилізація кролів",
  description:
    "Кастрація та стерилізація кролів: показання, переваги, підготовка до операції, післяопераційний догляд, можливі ризики та рекомендації ветеринарів.",
};

export default function Page() {
  return <Neutering />;
}
