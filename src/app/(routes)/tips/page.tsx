import type { Metadata } from "next";
import Tips from "../../_pages/Tips/Tips";

export const metadata: Metadata = {
  title: "Поради з кролівництва",
  description:
    "Корисні поради з кролівництва для початківців і досвідчених кролівників: догляд, годівля, утримання, розведення, профілактика захворювань та підвищення продуктивності кролів.",
};

export default function Page() {
  return <Tips />;
}
