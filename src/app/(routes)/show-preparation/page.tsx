import type { Metadata } from "next";
import ShowPreparation from "../../_pages/ShowPreparation/ShowPreparation";

export const metadata: Metadata = {
  title: "Підготовка кролів до виставки",
  description:
    "Підготовка кролів до виставки: догляд за шерстю, правильне годування, оцінка фізичного стану, тренування до транспортування, ветеринарні вимоги та поради для успішної участі у виставках.",
};

export default function Page() {
  return <ShowPreparation />;
}
