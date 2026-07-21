"use client";

import Matings from "../../_pages/Matings/Matings";
import Auth from "../../../_pages/Auth/Auth";
import { useSession } from "../../../context/SessionContext";

export default function Page() {
  const session = useSession();
  if (!session) {
    return <Auth />;
  }
  return <Matings session={session} />;
}
