import type { Metadata } from "next";
import DisinfectionLogGate from "./DisinfectionLogGate";

export const metadata: Metadata = {
  title: "Журнал дезінфекції — Кролівництво від А до Я",
};

export default function Page() {
  return <DisinfectionLogGate />;
}
