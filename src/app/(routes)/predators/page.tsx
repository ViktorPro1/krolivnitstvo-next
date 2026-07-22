import type { Metadata } from "next";
import Predators from "../../_pages/Predators/Predators";

export const metadata: Metadata = {
  title: "Хижаки та захист кролів",
  description:
    "Хижаки, небезпечні для кролів: лисиці, куниці, тхори, собаки, коти, хижі птахи та гризуни. Методи захисту кролеферми, кліток і вольєрів від нападів.",
};

export default function Page() {
  return <Predators />;
}
