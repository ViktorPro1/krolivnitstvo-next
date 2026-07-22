import type { Metadata } from "next";
import ClimateAutomation from "../../_pages/ClimateAutomation/ClimateAutomation";

export const metadata: Metadata = {
  title: "Автоматизація мікроклімату",
  description:
    "Автоматизація мікроклімату у кролівництві: контроль температури, вологості, вентиляції та освітлення для забезпечення комфортних умов утримання кролів.",
};

export default function Page() {
  return <ClimateAutomation />;
}
