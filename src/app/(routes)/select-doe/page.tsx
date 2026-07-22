import type { Metadata } from "next";
import SelectDoe from "../../_pages/SelectDoe/SelectDoe";

export const metadata: Metadata = {
  title: "Як вибрати кролицю для розведення",
  description:
    "Як вибрати кролицю для розведення: критерії відбору самки, оцінка здоров'я, продуктивності, материнських якостей, віку, походження та рекомендації для успішного племінного розведення.",
};

export default function Page() {
  return <SelectDoe />;
}
