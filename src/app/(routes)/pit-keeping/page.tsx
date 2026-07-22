import type { Metadata } from "next";
import PaddockInfo from "../../_pages/Paddocks/PaddockInfo";

export const metadata: Metadata = {
  title: "Вольєрне утримання кролів",
  description:
    "Вольєрне утримання кролів: облаштування вольєра, переваги та недоліки, вимоги до безпеки, годівлі, догляду й утримання кролів у просторих умовах.",
};

export default function Page() {
  return <PaddockInfo />;
}
