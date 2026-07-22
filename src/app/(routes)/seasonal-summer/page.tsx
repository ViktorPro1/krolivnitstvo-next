import type { Metadata } from "next";
import SeasonalSummer from "../../_pages/SeasonalSummer/SeasonalSummer";

export const metadata: Metadata = {
  title: "Догляд за кролями влітку",
  description:
    "Догляд за кролями влітку: захист від спеки, правильне напування, годування, вентиляція, профілактика теплового удару, догляд за клітками та сезонні рекомендації для літнього утримання.",
};

export default function Page() {
  return <SeasonalSummer />;
}
