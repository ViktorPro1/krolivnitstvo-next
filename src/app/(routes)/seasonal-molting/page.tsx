import type { Metadata } from "next";
import SeasonalMolting from "../../_pages/SeasonalMolting/SeasonalMolting";

export const metadata: Metadata = {
  title: "Линька у кролів",
  description:
    "Линька у кролів: коли відбувається сезонна зміна шерсті, як доглядати за кролем під час линьки, правильне годування, профілактика ковтання шерсті та поради для підтримки здоров'я.",
};

export default function Page() {
  return <SeasonalMolting />;
}
