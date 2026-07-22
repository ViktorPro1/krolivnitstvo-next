import type { Metadata } from "next";
import VetFecalSample from "../../_pages/VetFecalSample/VetFecalSample";

export const metadata: Metadata = {
  title: "Як правильно зібрати кал кроля для аналізу",
  description:
    "Як правильно зібрати кал кроля для лабораторного аналізу: правила відбору, зберігання та транспортування зразка, підготовка до дослідження, діагностика кокцидіозу, паразитів і захворювань травної системи.",
};

export default function Page() {
  return <VetFecalSample />;
}
