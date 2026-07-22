import type { Metadata } from "next";
import SpecialFeeds from "../../_pages/SpecialFeeds/SpecialFeeds";

export const metadata: Metadata = {
  title: "Спеціальні корми для кролів",
  description:
    "Спеціальні корми для кролів: лікувальні, дієтичні та функціональні раціони, їх призначення, склад, особливості застосування, переваги та рекомендації щодо використання.",
};

export default function Page() {
  return <SpecialFeeds />;
}
