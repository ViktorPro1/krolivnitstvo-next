import type { Metadata } from "next";
import FeedingAutomation from "../../_pages/FeedingAutomation/FeedingAutomation";

export const metadata: Metadata = {
  title: "Автоматизація годівлі кролів",
  description:
    "Автоматизація годівлі кролів: автоматичні годівниці, системи подачі корму, переваги автоматизації, економія часу та підвищення ефективності господарства.",
};

export default function Page() {
  return <FeedingAutomation />;
}
