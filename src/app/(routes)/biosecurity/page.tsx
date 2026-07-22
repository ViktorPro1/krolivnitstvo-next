import type { Metadata } from "next";
import Biosecurity from "../../_pages/Biosecurity/Biosecurity";

export const metadata: Metadata = {
  title: "Біобезпека",
  description:
    "Біобезпека у кролівництві: профілактика захворювань, карантин, дезінфекція, санітарні заходи та захист поголів'я.",
};

export default function Page() {
  return <Biosecurity />;
}
