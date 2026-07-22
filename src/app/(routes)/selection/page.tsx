import type { Metadata } from "next";
import Selection from "../../_pages/Selection/Selection";

export const metadata: Metadata = {
  title: "Селекція кролів",
  description:
    "Селекція кролів: принципи відбору тварин для розведення, покращення продуктивності, збереження породних якостей, генетика, племінна робота та рекомендації для успішної селекції.",
};

export default function Page() {
  return <Selection />;
}
