import type { Metadata } from "next";
import DisqualifyingFaults from "../../_pages/DisqualifyingFaults/DisqualifyingFaults";

export const metadata: Metadata = {
  title: "Дискваліфікуючі вади кролів",
  description:
    "Дискваліфікуючі вади кролів: перелік дефектів, що виключають тварину з племінної роботи або участі у виставках, відповідно до породних стандартів.",
};

export default function Page() {
  return <DisqualifyingFaults />;
}
