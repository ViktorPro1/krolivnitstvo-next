import type { Metadata } from "next";
import SmartFarm from "../../_pages/SmartFarm/SmartFarm";

export const metadata: Metadata = {
  title: "Розумна кролеферма",
  description:
    "Розумна кролеферма: автоматизація догляду за кролями, системи моніторингу, датчики температури та вологості, автоматичне годування, напування, вентиляція й сучасні технології у кролівництві.",
};

export default function Page() {
  return <SmartFarm />;
}
