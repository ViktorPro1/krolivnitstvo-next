"use client";

import MyVaccinations from "../../_pages/MyVaccinations/MyVaccinations";
import Auth from "../../../_pages/Auth/Auth";
import { useSession } from "../../../context/SessionContext";

export default function Page() {
  const session = useSession();
  if (!session) {
    return <Auth />;
  }
  return <MyVaccinations session={session} />;
}
