"use client";

import SessionGate from "../../components/SessionGate/SessionGate";
import DisinfectionLog from "../../_pages/DisinfectionLog/DisinfectionLog";

export default function DisinfectionLogGate() {
  return (
    <SessionGate>
      {(session) => <DisinfectionLog session={session} />}
    </SessionGate>
  );
}
