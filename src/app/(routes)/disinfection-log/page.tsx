"use client";

import DisinfectionLog from "../../_pages/DisinfectionLog/DisinfectionLog";
import { useSession } from "../../../context/SessionContext";

// УВАГА: в оригіналі ця сторінка не мала гейту на сесію (session!),
// хоча компонент її очікує. Переглянь, чи потрібен тут захист,
// як у "gate"-маршрутах вище.
export default function Page() {
  const session = useSession();
  return <DisinfectionLog session={session!} />;
}
