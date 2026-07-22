"use client";

import type { ReactNode } from "react";
import type { Session } from "@supabase/supabase-js";
import { useSession } from "../../context/SessionContext";
import Auth from "../../_pages/Auth/Auth";

interface Props {
  children: (session: Session) => ReactNode;
  returnTo?: string;
}

export default function SessionGate({ children, returnTo }: Props) {
  const session = useSession();
  if (!session) return <Auth {...(returnTo ? { returnTo } : {})} />;
  return <>{children(session)}</>;
}
