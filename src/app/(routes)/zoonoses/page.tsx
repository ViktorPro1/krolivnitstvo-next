import type { Metadata } from "next";
import Zoonoses from "../../_pages/Zoonoses/Zoonoses";

export const metadata: Metadata = {
  title: "Зоонози у кролів",
  description:
    "Зоонози у кролів: захворювання, які можуть передаватися від кролів людині, шляхи зараження, симптоми, профілактика, правила гігієни та заходи безпеки.",
};

export default function Page() {
  return <Zoonoses />;
}
