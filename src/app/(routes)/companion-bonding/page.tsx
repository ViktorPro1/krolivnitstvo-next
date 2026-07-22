import type { Metadata } from "next";
import CompanionBonding from "../../_pages/CompanionBonding/CompanionBonding";

export const metadata: Metadata = {
  title: "Знайомство та спільне утримання кролів",
  description:
    "Як правильно знайомити кролів між собою, уникнути конфліктів, сформувати сумісні пари та забезпечити безпечне спільне утримання.",
};

export default function Page() {
  return <CompanionBonding />;
}
