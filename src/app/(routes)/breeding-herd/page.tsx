import type { Metadata } from "next";
import BreedingHerd from "../../_pages/BreedingHerd/BreedingHerd";

export const metadata: Metadata = {
  title: "Племінне стадо кролів",
  description:
    "Племінне стадо кролів: формування, відбір самців і самок, ведення племінної роботи, покращення генетики та підвищення продуктивності господарства.",
};

export default function Page() {
  return <BreedingHerd />;
}
