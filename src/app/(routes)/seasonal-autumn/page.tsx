import type { Metadata } from "next";
import SeasonalAutumn from "../../_pages/SeasonalAutumn/SeasonalAutumn";

export const metadata: Metadata = {
  title: "Догляд за кролями восени",
  description:
    "Догляд за кролями восени: підготовка до зими, утеплення кліток, зміна раціону, профілактика захворювань, сезонні роботи на кролефермі та рекомендації для осіннього утримання.",
};

export default function Page() {
  return <SeasonalAutumn />;
}
