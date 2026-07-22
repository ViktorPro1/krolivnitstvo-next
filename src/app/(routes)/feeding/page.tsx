import type { Metadata } from "next";
import Feeding from "../../_pages/Feeding/Feeding";

export const metadata: Metadata = {
  title: "Годівля кролів",
  description:
    "Годівля кролів: правильний раціон, норми годування, корми, вітаміни, мінерали, сезонні особливості та практичні рекомендації для здорового росту й розвитку.",
};

export default function Page() {
  return <Feeding />;
}
