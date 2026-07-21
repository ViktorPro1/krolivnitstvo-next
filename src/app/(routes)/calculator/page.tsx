"use client";

import Calculator from "../../_pages/Calculator/Calculator";
import Auth from "@/app/_pages/Auth/Auth";
import { useSession } from "@/app/context/SessionContext";

export default function Page() {
  const session = useSession();
  if (!session) {
    return <Auth returnTo="/calculator" />;
  }
  return <Calculator session={session} />;
}
