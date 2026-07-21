"use client";

import Admin from "../../_pages/Admin/Admin";
import Auth from "@/app/_pages/Auth/Auth";
import { useSession } from "@/app/context/SessionContext";

export default function Page() {
  const session = useSession();
  if (!session) {
    return <Auth />;
  }
  return <Admin session={session} />;
}
