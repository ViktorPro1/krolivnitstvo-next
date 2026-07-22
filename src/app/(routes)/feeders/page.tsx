import type { Metadata } from "next";
import Feeders from "../../_pages/Feeders/Feeders";

export const metadata: Metadata = {
  title: "Годівниці для кролів",
  description:
    "Годівниці для кролів: види, матеріали, правильне розміщення, переваги різних конструкцій та поради щодо вибору для домашніх і промислових господарств.",
};

export default function Page() {
  return <Feeders />;
}
