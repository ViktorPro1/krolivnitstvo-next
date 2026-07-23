"use client";

import SessionGate from "../../components/SessionGate/SessionGate";
import CageSearch from "../../_pages/CageSearch/CageSearch";

export default function CageSearchGate() {
  return (
    <SessionGate>{(session) => <CageSearch session={session} />}</SessionGate>
  );
}
