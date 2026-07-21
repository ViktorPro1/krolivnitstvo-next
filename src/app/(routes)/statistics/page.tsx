"use client";

import Statistics from "../../_pages/Statistics/Statistics";
import Auth from "@/app/_pages/Auth/Auth";
import { useSession } from "@/app/context/SessionContext";

export default function Page() {
  const session = useSession();
  if (!session) {
    return <Auth />;
  }
  return <Statistics session={session} />;
}
