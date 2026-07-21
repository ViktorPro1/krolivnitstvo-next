"use client";

import RabbitEdit from "../../../../_pages/RabbitEdit/RabbitEdit";
import Auth from "../../../_pages/Auth/Auth";
import { useSession } from "../../../context/SessionContext";

export default function Page({ params }: { params: { id: string } }) {
  const session = useSession();
  if (!session) {
    return <Auth />;
  }
  return <RabbitEdit session={session} id={params.id} />;
}
