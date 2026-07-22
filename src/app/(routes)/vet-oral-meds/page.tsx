import type { Metadata } from "next";
import VetOralMeds from "../../_pages/VetOralMeds/VetOralMeds";

export const metadata: Metadata = {
  title: "Як правильно давати ліки кролям через рот",
  description:
    "Як правильно давати кролям ліки через рот: техніка випоювання, використання шприца без голки, правила дозування, безпечне введення препаратів та поради для зменшення стресу.",
};

export default function Page() {
  return <VetOralMeds />;
}
