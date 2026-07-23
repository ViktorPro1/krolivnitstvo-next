import type { Metadata } from "next";
import CageSearchGate from "./CageSearchGate";

export const metadata: Metadata = {
  title: "Історія клітки — Кролівництво від А до Я",
};

export default function Page() {
  return <CageSearchGate />;
}
