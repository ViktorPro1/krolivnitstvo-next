import type { Metadata } from "next";
import Biology from "../../_pages/Biology/Biology";

export const metadata: Metadata = {
  title: "Біологія та анатомія кролів",
  description:
    "Будова тіла, фізіологія, анатомія та особливості організму кролів. Практичний посібник для кролівників.",
};

export default function Page() {
  return <Biology />;
}
