import type { Metadata } from "next";
import RabbitVsHare from "../../_pages/RabbitVsHare/RabbitVsHare";

export const metadata: Metadata = {
  title: "Чим кролик відрізняється від зайця",
  description:
    "Кролик і заєць: основні відмінності у зовнішності, поведінці, способі життя, розмноженні, середовищі існування та біологічних особливостях.",
};

export default function Page() {
  return <RabbitVsHare />;
}
