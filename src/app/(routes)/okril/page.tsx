import type { Metadata } from "next";
import Okril from "../../_pages/Okril/Okril";

export const metadata: Metadata = {
  title: "Окріл кролиці",
  description:
    "Окріл кролиці: підготовка гнізда, ознаки наближення окролу, перебіг пологів, догляд за кролицею та новонародженими кроленятами, можливі ускладнення.",
};

export default function Page() {
  return <Okril />;
}
