import type { Metadata } from "next";
import Changelog from "../../_pages/Changelog/Changelog";

export const metadata: Metadata = {
  title: "Історія змін",
  description:
    "Історія змін проєкту «Кролівництво від А до Я»: нові функції, покращення, виправлення помилок та оновлення платформи.",
};

export default function Page() {
  return <Changelog />;
}
