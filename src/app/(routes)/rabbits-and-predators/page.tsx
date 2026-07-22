import type { Metadata } from "next";
import RabbitsAndPredators from "../../_pages/RabbitsAndPredators/RabbitsAndPredators";

export const metadata: Metadata = {
  title: "Кролі та хижаки: як захистити господарство",
  description:
    "Кролі та хижаки: які тварини становлять загрозу для кролів, як захистити кролеферму від лисиць, куниць, собак, котів, хижих птахів і гризунів, а також ефективні методи профілактики.",
};

export default function Page() {
  return <RabbitsAndPredators />;
}
