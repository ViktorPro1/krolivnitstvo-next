import type { Metadata } from "next";
import BeginnerGuide from "../../_pages/BeginnerGuide/BeginnerGuide";

export const metadata: Metadata = {
  title: "Посібник для початківців",
  description:
    "Покроковий посібник для тих, хто починає займатися кролівництвом: вибір кролів, утримання, годівля, догляд та корисні рекомендації.",
};

export default function Page() {
  return <BeginnerGuide />;
}
