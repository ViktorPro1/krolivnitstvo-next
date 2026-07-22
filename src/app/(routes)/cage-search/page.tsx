import type { Metadata } from "next";
import SessionGate from "../../components/SessionGate/SessionGate";
import CageSearch from "../../_pages/CageSearch/CageSearch";

export const metadata: Metadata = {
  title: "Історія клітки — Кролівництво від А до Я",
};

export default function Page() {
  return (
    <SessionGate>{(session) => <CageSearch session={session} />}</SessionGate>
  );
}
