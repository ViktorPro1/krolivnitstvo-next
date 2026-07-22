import type { Metadata } from "next";
import Calendar from "../../_pages/Calendar/Calendar";

export const metadata: Metadata = {
  title: "Календар кролівника",
  description:
    "Календар кролівника для планування парувань, окролів, вакцинації, лікування та інших важливих подій у господарстві.",
};

export default function Page() {
  return <Calendar />;
}
