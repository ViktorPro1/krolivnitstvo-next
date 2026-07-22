import type { Metadata } from "next";
import Care from "../../_pages/Care/Care";

export const metadata: Metadata = {
  title: "Догляд за кролями",
  description:
    "Догляд за кролями: щоденні процедури, гігієна, комфортне утримання, контроль здоров'я та практичні рекомендації для кролівників.",
};

export default function Page() {
  return <Care />;
}
