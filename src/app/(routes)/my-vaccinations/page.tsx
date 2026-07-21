"use client";

import MyVaccinations from "../../_pages/MyVaccinations/MyVaccinations";
import Auth from "@/app/_pages/Auth/Auth";
import { useSession } from "@/app/context/SessionContext";

export default function Page() {
  const session = useSession();
  if (!session) {
    return <Auth />;
  }
  return <MyVaccinations session={session} />;
}
