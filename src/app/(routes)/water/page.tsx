import type { Metadata } from "next";
import Water from "../../_pages/Water/Water";

export const metadata: Metadata = {
  title: "Вода для кролів",
  description:
    "Вода для кролів: добова потреба, вимоги до якості води, правила напування, вибір поїлок, вплив нестачі води на здоров'я, ріст і продуктивність кролів.",
};

export default function Page() {
  return <Water />;
}
