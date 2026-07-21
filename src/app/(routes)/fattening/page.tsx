"use client";

import Fattening from "../../_pages/Fattening/Fattening";
import Auth from "../../../_pages/Auth/Auth";
import { useSession } from "../../../context/SessionContext";

export default function Page() {
  const session = useSession();
  if (!session) {
    return <Auth />;
  }
  return <Fattening session={session} />;
}
