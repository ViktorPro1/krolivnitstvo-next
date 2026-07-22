import type { Metadata } from "next";
import Medicines from "../../_pages/Medicines/Medicines";

export const metadata: Metadata = {
  title: "Лікарські препарати для кролів",
  description:
    "Лікарські препарати для кролів: огляд ветеринарних засобів, показання до застосування, дозування, правила використання, зберігання та заходи безпеки.",
};

export default function Page() {
  return <Medicines />;
}
