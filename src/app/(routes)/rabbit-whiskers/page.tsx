import type { Metadata } from "next";
import RabbitWhiskers from "../../_pages/RabbitWhiskers/RabbitWhiskers";

export const metadata: Metadata = {
  title: "Вуса кролів: призначення та функції",
  description:
    "Вуса кролів (вібриси): для чого вони потрібні, як допомагають орієнтуватися в просторі, чому їх не можна підстригати та як вони впливають на поведінку кролів.",
};

export default function Page() {
  return <RabbitWhiskers />;
}
