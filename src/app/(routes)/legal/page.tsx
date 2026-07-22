import type { Metadata } from "next";
import Legal from "../../_pages/Legal/Legal";

export const metadata: Metadata = {
  title: "Юридичні аспекти кролівництва",
  description:
    "Юридичні аспекти кролівництва: реєстрація господарства, вимоги законодавства, ветеринарні документи, правила утримання кролів та ведення діяльності.",
};

export default function Page() {
  return <Legal />;
}
