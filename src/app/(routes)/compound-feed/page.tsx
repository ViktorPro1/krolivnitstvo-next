import type { Metadata } from "next";
import CompoundFeed from "../../_pages/CompoundFeed/CompoundFeed";

export const metadata: Metadata = {
  title: "Комбікорм для кролів",
  description:
    "Комбікорм для кролів: склад, рецепти, поживна цінність, особливості приготування та рекомендації щодо годівлі кролів різного віку.",
};

export default function Page() {
  return <CompoundFeed />;
}
