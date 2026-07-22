import type { Metadata } from "next";
import LitterTraining from "../../_pages/LitterTraining/LitterTraining";

export const metadata: Metadata = {
  title: "Привчання кролів до лотка",
  description:
    "Привчання кролів до лотка: покрокові рекомендації, вибір лотка та наповнювача, корекція поведінки й поради для швидкого навчання.",
};

export default function Page() {
  return <LitterTraining />;
}
