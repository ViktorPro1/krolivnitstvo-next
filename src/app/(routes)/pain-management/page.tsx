import type { Metadata } from "next";
import PainManagement from "../../_pages/PainManagement/PainManagement";

export const metadata: Metadata = {
  title: "Знеболення у кролів",
  description:
    "Знеболення у кролів: методи контролю болю, знеболювальні препарати, показання до застосування, післяопераційний догляд та рекомендації щодо безпечного використання.",
};

export default function Page() {
  return <PainManagement />;
}
