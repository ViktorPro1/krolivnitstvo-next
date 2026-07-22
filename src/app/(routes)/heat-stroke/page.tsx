import type { Metadata } from "next";
import HeatStroke from "../../_pages/HeatStroke/HeatStroke";

export const metadata: Metadata = {
  title: "Тепловий удар у кролів",
  description:
    "Тепловий удар у кролів: причини, симптоми, перша допомога, лікування, профілактика перегріву та захист тварин у спекотний період.",
};

export default function Page() {
  return <HeatStroke />;
}
