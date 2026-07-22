import type { Metadata } from "next";
import BuckManagement from "../../_pages/BuckManagement/BuckManagement";

export const metadata: Metadata = {
  title: "Утримання самців-плідників",
  description:
    "Утримання самців-плідників: вибір, догляд, годівля, підготовка до парування, підтримання репродуктивної здатності та рекомендації для ефективного розведення кролів.",
};

export default function Page() {
  return <BuckManagement />;
}
