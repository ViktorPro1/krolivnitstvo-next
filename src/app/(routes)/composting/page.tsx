import type { Metadata } from "next";
import Composting from "../../_pages/Composting/Composting";

export const metadata: Metadata = {
  title: "Компостування кролячого гною",
  description:
    "Компостування кролячого гною: підготовка компосту, правильне зберігання, дозрівання, використання як органічного добрива та практичні рекомендації.",
};

export default function Page() {
  return <Composting />;
}
