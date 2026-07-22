import type { Metadata } from "next";
import Necropsy from "../../_pages/Necropsy/Necropsy";

export const metadata: Metadata = {
  title: "Розтин кролів (Некропсія)",
  description:
    "Некропсія кролів: порядок проведення розтину, оцінка внутрішніх органів, виявлення причин загибелі, патологічних змін та допомога у встановленні діагнозу.",
};

export default function Page() {
  return <Necropsy />;
}
