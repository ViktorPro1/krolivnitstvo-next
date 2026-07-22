import type { Metadata } from "next";
import Genetics from "../../_pages/Genetics/Genetics";

export const metadata: Metadata = {
  title: "Генетика кролів",
  description:
    "Генетика кролів: спадковість, успадкування ознак, селекція, генетичні особливості порід, забарвлення та основи племінної роботи.",
};

export default function Page() {
  return <Genetics />;
}
