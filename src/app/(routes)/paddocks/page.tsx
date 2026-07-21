"use client";

import Paddocks from "../../_pages/Paddocks/Paddocks";
import Auth from "../../../_pages/Auth/Auth";
import { useSession } from "../../../context/SessionContext";

export default function Page() {
  const session = useSession();
  if (!session) {
    return <Auth />;
  }
  return <Paddocks session={session} />;
}
