import type { Metadata } from "next";
import SeniorRabbit from "../../_pages/SeniorRabbit/SeniorRabbit";

export const metadata: Metadata = {
  title: "Догляд за літніми кролями",
  description:
    "Догляд за літніми кролями: особливості утримання, годування, профілактика вікових захворювань, підтримка здоров'я, контроль ваги, догляд за зубами та покращення якості життя старіючих кролів.",
};

export default function Page() {
  return <SeniorRabbit />;
}
