import type { Metadata } from "next";
import RabbitBodyCondition from "../../_pages/RabbitBodyCondition/RabbitBodyCondition";

export const metadata: Metadata = {
  title: "Оцінка вгодованості кролів",
  description:
    "Оцінка вгодованості кролів: як визначити стан тіла, оцінити жирові запаси та м'язову масу, виявити виснаження або ожиріння й правильно скоригувати раціон.",
};

export default function Page() {
  return <RabbitBodyCondition />;
}
