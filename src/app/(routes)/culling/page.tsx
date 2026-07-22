import type { Metadata } from "next";
import Culling from "../../_pages/Culling/Culling";

export const metadata: Metadata = {
  title: "Вибракування кролів",
  description:
    "Вибракування кролів: критерії відбору, причини вибракування, оцінка продуктивності, стану здоров'я та рекомендації щодо оновлення поголів'я.",
};

export default function Page() {
  return <Culling />;
}
