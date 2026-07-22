import type { Metadata } from "next";
import AntibioticTherapy from "../../_pages/AntibioticTherapy/AntibioticTherapy";

export const metadata: Metadata = {
  title: "Антибіотикотерапія",
  description:
    "Антибіотикотерапія у кролів: показання, застосування антибіотиків, рекомендації та важливі застереження.",
};

export default function Page() {
  return <AntibioticTherapy />;
}
