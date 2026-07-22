import type { Metadata } from "next";
import SessionGate from "../../components/SessionGate/SessionGate";
import DisinfectionLog from "../../_pages/DisinfectionLog/DisinfectionLog";

export const metadata: Metadata = {
  title: "Журнал дезінфекції — Кролівництво від А до Я",
};

export default function Page() {
  return (
    <SessionGate>
      {(session) => <DisinfectionLog session={session} />}
    </SessionGate>
  );
}
