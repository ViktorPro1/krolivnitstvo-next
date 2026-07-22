import type { Metadata } from "next";
import ShowJudging from "../../_pages/ShowJudging/ShowJudging";

export const metadata: Metadata = {
  title: "Суддівство кролів на виставках",
  description:
    "Суддівство кролів на виставках: як проходить експертна оцінка, критерії суддівства, стандарти порід, оцінювання екстер'єру, шерсті, кондиції та типові причини зниження балів.",
};

export default function Page() {
  return <ShowJudging />;
}
