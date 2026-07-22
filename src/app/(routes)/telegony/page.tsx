import type { Metadata } from "next";
import Telegony from "../../_pages/Telegony/Telegony";

export const metadata: Metadata = {
  title: "Телегонія у кролів: міф чи реальність?",
  description:
    "Телегонія у кролів: що таке телегонія, чи впливає перший самець на майбутнє потомство кролиці, сучасні наукові дані, генетика та поширені міфи серед кролівників.",
};

export default function Page() {
  return <Telegony />;
}
