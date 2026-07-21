"use client";

import CageSearch from "../../_pages/CageSearch/CageSearch";
import { useSession } from "@/app/context/SessionContext";

// УВАГА: в оригіналі ця сторінка не мала гейту на сесію (session!),
// хоча компонент її очікує. Переглянь, чи потрібен тут захист,
// як у "gate"-маршрутах вище.
export default function Page() {
  const session = useSession();
  return <CageSearch session={session!} />;
}
