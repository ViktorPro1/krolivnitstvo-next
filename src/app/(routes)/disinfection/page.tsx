import type { Metadata } from "next";
import Disinfection from "../../_pages/Disinfection/Disinfection";

export const metadata: Metadata = {
  title: "Дезінфекція у кролівництві",
  description:
    "Дезінфекція у кролівництві: ефективні засоби, способи обробки кліток, приміщень, інвентарю та профілактика поширення інфекцій.",
};

export default function Page() {
  return <Disinfection />;
}
