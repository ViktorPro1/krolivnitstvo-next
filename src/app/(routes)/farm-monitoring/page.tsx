import type { Metadata } from "next";
import FarmMonitoring from "../../_pages/FarmMonitoring/FarmMonitoring";

export const metadata: Metadata = {
  title: "Моніторинг кролеферми",
  description:
    "Моніторинг кролеферми: контроль мікроклімату, стану тварин, годівлі, продуктивності та ключових показників для ефективного управління господарством.",
};

export default function Page() {
  return <FarmMonitoring />;
}
