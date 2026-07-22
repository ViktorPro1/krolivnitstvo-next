import type { Metadata } from "next";
import AboutProject from "../../_pages/Info/AboutProject/AboutProject";

export const metadata: Metadata = {
  title: "Про проєкт",
  description:
    "Дізнайтеся більше про проєкт «Кролівництво від А до Я», його можливості, мету та розвиток.",
};

export default function Page() {
  return <AboutProject />;
}
