import type { Metadata } from "next";
import VetInjections from "../../_pages/VetInjections/VetInjections";

export const metadata: Metadata = {
  title: "Ін'єкції кролям: як правильно робити уколи",
  description:
    "Ін'єкції кролям: як правильно робити підшкірні та внутрішньом'язові уколи, вибір шприца й голки, техніка введення препаратів, дозування, правила безпеки та типові помилки.",
};

export default function Page() {
  return <VetInjections />;
}
