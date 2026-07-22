import type { Metadata } from "next";
import FloorCare from "../../_pages/FloorCare/FloorCare";

export const metadata: Metadata = {
  title: "Догляд за підлогою у крільчатнику",
  description:
    "Догляд за підлогою у крільчатнику: вибір покриття, прибирання, дезінфекція, підтримання сухості та профілактика захворювань лап у кролів.",
};

export default function Page() {
  return <FloorCare />;
}
