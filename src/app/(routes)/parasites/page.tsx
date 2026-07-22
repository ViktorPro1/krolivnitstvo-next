import type { Metadata } from "next";
import Parasites from "../../_pages/Parasites/Parasites";

export const metadata: Metadata = {
  title: "Паразити у кролів",
  description:
    "Паразити у кролів: зовнішні та внутрішні паразити, симптоми зараження, методи діагностики, лікування, профілактика та захист поголів'я.",
};

export default function Page() {
  return <Parasites />;
}
