import type { Metadata } from "next";
import Microclimate from "../../_pages/Microclimate/Microclimate";

export const metadata: Metadata = {
  title: "Мікроклімат у крільчатнику",
  description:
    "Мікроклімат у крільчатнику: оптимальна температура, вологість, вентиляція, освітлення, якість повітря та створення комфортних умов для утримання кролів.",
};

export default function Page() {
  return <Microclimate />;
}
