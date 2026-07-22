import type { Metadata } from "next";
import FarmManagementSoftware from "../../_pages/FarmManagementSoftware/FarmManagementSoftware";

export const metadata: Metadata = {
  title: "Програми для управління кролефермою",
  description:
    "Програми для управління кролефермою: облік поголів'я, парувань, окролів, вакцинації, лікування, витрат та автоматизація ведення господарства.",
};

export default function Page() {
  return <FarmManagementSoftware />;
}
