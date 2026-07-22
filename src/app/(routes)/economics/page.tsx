import type { Metadata } from "next";
import Economics from "../../_pages/Economics/Economics";

export const metadata: Metadata = {
  title: "Економіка кролівництва",
  description:
    "Економіка кролівництва: розрахунок витрат, прибутковості, рентабельності, собівартості продукції та ефективне планування господарства.",
};

export default function Page() {
  return <Economics />;
}
