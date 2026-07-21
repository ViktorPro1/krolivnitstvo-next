"use client";

import MyTreatments from "../../_pages/MyTreatments/MyTreatments";
import Auth from "../../../_pages/Auth/Auth";
import { useSession } from "../../../context/SessionContext";

export default function Page() {
  const session = useSession();
  if (!session) {
    return <Auth />;
  }
  return <MyTreatments session={session} />;
}
