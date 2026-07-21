"use client";

import RabbitRegistry from "../../_pages/RabbitRegistry/RabbitRegistry";
import Auth from "@/app/_pages/Auth/Auth";
import { useSession } from "@/app/context/SessionContext";

export default function Page() {
  const session = useSession();
  if (!session) {
    return <Auth />;
  }
  return <RabbitRegistry session={session} />;
}
