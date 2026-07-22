import type { Metadata } from "next";
import WeightControl from "../../_pages/WeightControl/WeightControl";

export const metadata: Metadata = {
  title: "Контроль ваги кролів",
  description:
    "Контроль ваги кролів: регулярне зважування, оцінка приросту маси, норми ваги за віком і породою, виявлення відхилень та коригування годівлі для підтримання здоров'я.",
};

export default function Page() {
  return <WeightControl />;
}
