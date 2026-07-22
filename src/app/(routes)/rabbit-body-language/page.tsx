import type { Metadata } from "next";
import RabbitBodyLanguage from "../../_pages/RabbitBodyLanguage/RabbitBodyLanguage";

export const metadata: Metadata = {
  title: "Мова тіла кролів",
  description:
    "Мова тіла кролів: як розуміти пози, рухи вух, хвоста та очей, ознаки страху, радості, агресії, стресу, довіри й інших емоцій кролів.",
};

export default function Page() {
  return <RabbitBodyLanguage />;
}
