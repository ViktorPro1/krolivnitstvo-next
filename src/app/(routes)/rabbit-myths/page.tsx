import type { Metadata } from "next";
import RabbitMyths from "../../_pages/RabbitMyths/RabbitMyths";

export const metadata: Metadata = {
  title: "Міфи про кролів",
  description:
    "Поширені міфи про кролів: правда і вигадки щодо утримання, годівлі, розведення, здоров'я, поведінки та догляду за домашніми й фермерськими кролями.",
};

export default function Page() {
  return <RabbitMyths />;
}
