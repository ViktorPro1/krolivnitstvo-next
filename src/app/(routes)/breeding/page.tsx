import type { Metadata } from "next";
import Breeding from "../../_pages/Breeding/Breeding";

export const metadata: Metadata = {
  title: "Розведення кролів",
  description:
    "Розведення кролів: підбір племінних тварин, парування, вагітність, окріл, вирощування потомства та рекомендації для успішного розведення.",
};

export default function Page() {
  return <Breeding />;
}
