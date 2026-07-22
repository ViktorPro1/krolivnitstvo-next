import type { Metadata } from "next";
import PetTravel from "../../_pages/PetTravel/PetTravel";

export const metadata: Metadata = {
  title: "Подорожі з кролем",
  description:
    "Подорожі з кролем: підготовка до поїздки, вибір переноски, транспортування автомобілем і громадським транспортом, необхідні документи, догляд та безпека під час подорожі.",
};

export default function Page() {
  return <PetTravel />;
}
