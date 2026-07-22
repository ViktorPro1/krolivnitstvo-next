import type { Metadata } from "next";
import Tools from "../../_pages/Tools/Tools";

export const metadata: Metadata = {
  title: "Інструменти для кролівництва",
  description:
    "Інструменти для кролівництва: необхідний інвентар для догляду за кролями, прибирання, годівлі, вакцинації, лікування, дезінфекції та обслуговування кролеферми.",
};

export default function Page() {
  return <Tools />;
}
