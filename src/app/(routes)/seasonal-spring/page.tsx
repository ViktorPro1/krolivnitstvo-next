import type { Metadata } from "next";
import SeasonalSpring from "../../_pages/SeasonalSpring/SeasonalSpring";

export const metadata: Metadata = {
  title: "Догляд за кролями навесні",
  description:
    "Догляд за кролями навесні: сезонна підготовка кролеферми, профілактика захворювань, вакцинація, зміна раціону, весняне розведення, прибирання кліток та рекомендації для успішного утримання.",
};

export default function Page() {
  return <SeasonalSpring />;
}
