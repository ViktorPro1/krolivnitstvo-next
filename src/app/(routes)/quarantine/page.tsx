"use client";

import Quarantine from "../../_pages/Quarantine/Quarantine";
import Auth from "../../../_pages/Auth/Auth";
import { useSession } from "../../../context/SessionContext";

export default function Page() {
  const session = useSession();
  if (!session) {
    return <Auth />;
  }
  return <Quarantine session={session} />;
}
