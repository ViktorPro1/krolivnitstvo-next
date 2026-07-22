import type { Metadata } from "next";
import DosageCalculator from "../../_pages/DosageCalculator/DosageCalculator";

export const metadata: Metadata = {
  title: "Калькулятор дозування препаратів",
  description:
    "Калькулятор дозування препаратів для кролів: швидкий розрахунок доз ліків за масою тіла, зручний інструмент для точного та безпечного лікування.",
};

export default function Page() {
  return <DosageCalculator />;
}
