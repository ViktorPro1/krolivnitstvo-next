import type { Metadata } from "next";
import Enrichment from "../../_pages/Enrichment/Enrichment";

export const metadata: Metadata = {
  title: "Збагачення середовища для кролів",
  description:
    "Збагачення середовища для кролів: іграшки, укриття, активність, природна поведінка та способи покращення добробуту тварин.",
};

export default function Page() {
  return <Enrichment />;
}
