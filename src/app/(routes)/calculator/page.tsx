"use client";

import Calculator from "../../_pages/Calculator/Calculator";
import Auth from "../../../_pages/Auth/Auth";
import { useSession } from "../../../context/SessionContext";

export default function Page() {
  const session = useSession();
  if (!session) {
    return <Auth returnTo="/calculator" />;
  }
  return <Calculator session={session} />;
}
