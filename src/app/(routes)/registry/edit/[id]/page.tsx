"use client";

import RabbitEdit from "../../../../_pages/RabbitEdit/RabbitEdit";
import Auth from "@/app/_pages/Auth/Auth";
import { useSession } from "@/app/context/SessionContext";

export default function Page({ params }: { params: { id: string } }) {
  const session = useSession();
  if (!session) {
    return <Auth />;
  }
  return <RabbitEdit session={session} id={params.id} />;
}
