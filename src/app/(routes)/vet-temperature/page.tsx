import type { Metadata } from "next";
import VetTemperature from "../../_pages/VetTemperature/VetTemperature";

export const metadata: Metadata = {
  title: "Температура тіла кролів",
  description:
    "Температура тіла кролів: нормальні показники, як правильно вимірювати температуру, причини підвищення або зниження, коли потрібна допомога ветеринара та що робити при відхиленнях.",
};

export default function Page() {
  return <VetTemperature />;
}
