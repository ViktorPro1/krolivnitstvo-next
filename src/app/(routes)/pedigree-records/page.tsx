import type { Metadata } from "next";
import PedigreeRecords from "../../_pages/PedigreeRecords/PedigreeRecords";

export const metadata: Metadata = {
  title: "Племінний облік кролів",
  description:
    "Племінний облік кролів: ведення родоводів, реєстрація походження, племінні записи, облік поколінь, селекційна робота та контроль генетичних ліній.",
};

export default function Page() {
  return <PedigreeRecords />;
}
