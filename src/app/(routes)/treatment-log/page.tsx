import type { Metadata } from "next";
import TreatmentLog from "../../_pages/TreatmentLog/TreatmentLog";

export const metadata: Metadata = {
  title: "Журнал лікування кролів",
  description:
    "Журнал лікування кролів: облік захворювань, призначених препаратів, дозувань, дат лікування, результатів терапії та контроль стану здоров'я кожної тварини.",
};

export default function Page() {
  return <TreatmentLog />;
}
