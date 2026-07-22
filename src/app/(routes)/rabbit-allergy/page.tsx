import type { Metadata } from "next";
import RabbitAllergy from "../../_pages/RabbitAllergy/RabbitAllergy";

export const metadata: Metadata = {
  title: "Алергія на кролів",
  description:
    "Алергія на кролів: причини виникнення, симптоми у людей, методи діагностики, способи зменшення впливу алергенів та рекомендації щодо безпечного утримання кролів.",
};

export default function Page() {
  return <RabbitAllergy />;
}
