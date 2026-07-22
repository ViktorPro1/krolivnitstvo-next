import type { Metadata } from "next";
import ArtificialInsemination from "../../_pages/ArtificialInsemination/ArtificialInsemination";

export const metadata: Metadata = {
  title: "Штучне осіменіння кролів",
  description:
    "Штучне осіменіння кролів: переваги, підготовка, проведення процедури, особливості та практичні рекомендації.",
};

export default function Page() {
  return <ArtificialInsemination />;
}
