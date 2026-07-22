import type { Metadata } from "next";
import Treatment from "../../_pages/Treatment/Treatment";

export const metadata: Metadata = {
  title: "Лікування кролів",
  description:
    "Лікування кролів: методи терапії найпоширеніших захворювань, застосування лікарських препаратів, догляд за хворими тваринами, профілактика ускладнень та рекомендації щодо одужання.",
};

export default function Page() {
  return <Treatment />;
}
