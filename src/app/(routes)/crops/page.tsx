import type { Metadata } from "next";
import Crops from "../../_pages/Crops/Crops";

export const metadata: Metadata = {
  title: "Кормові культури для кролів",
  description:
    "Кормові культури для кролів: які рослини можна вирощувати, їх поживна цінність, особливості заготівлі та використання в годівлі.",
};

export default function Page() {
  return <Crops />;
}
