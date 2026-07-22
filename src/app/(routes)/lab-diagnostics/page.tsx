import type { Metadata } from "next";
import LabDiagnostics from "../../_pages/LabDiagnostics/LabDiagnostics";

export const metadata: Metadata = {
  title: "Лабораторна діагностика кролів",
  description:
    "Лабораторна діагностика кролів: аналізи крові, калу, сечі, бактеріологічні та паразитологічні дослідження, методи виявлення захворювань і контроль здоров'я поголів'я.",
};

export default function Page() {
  return <LabDiagnostics />;
}
