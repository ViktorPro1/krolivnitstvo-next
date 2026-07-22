import type { Metadata } from "next";
import Glossary from "../../_pages/Glossary/Glossary";

export const metadata: Metadata = {
  title: "Словник термінів кролівництва",
  description:
    "Словник термінів кролівництва: пояснення основних понять, професійних термінів, скорочень і визначень, пов'язаних із розведенням, утриманням та лікуванням кролів.",
};

export default function Page() {
  return <Glossary />;
}
