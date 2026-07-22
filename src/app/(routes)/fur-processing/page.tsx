import type { Metadata } from "next";
import FurProcessing from "../../_pages/FurProcessing/FurProcessing";

export const metadata: Metadata = {
  title: "Обробка хутра кролів",
  description:
    "Обробка хутра кролів: зняття шкурок, консервування, вичинка, сушіння, зберігання та підготовка хутра до подальшого використання.",
};

export default function Page() {
  return <FurProcessing />;
}
