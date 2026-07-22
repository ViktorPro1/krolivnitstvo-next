import type { Metadata } from "next";
import Enclosure from "../../_pages/Enclosure/Enclosure";

export const metadata: Metadata = {
  title: "Вольєрне утримання кролів",
  description:
    "Вольєрне утримання кролів: переваги, недоліки, облаштування вольєра, вимоги до безпеки, годівлі та догляду за тваринами.",
};

export default function Page() {
  return <Enclosure />;
}
