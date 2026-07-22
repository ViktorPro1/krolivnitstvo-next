import type { Metadata } from "next";
import Sales from "../../_pages/Sales/Sales";

export const metadata: Metadata = {
  title: "Продаж кролів і продукції кролівництва",
  description:
    "Продаж кролів і продукції кролівництва: як знайти покупців, підготувати кролів до продажу, визначити ціну, оформити оголошення, продавати м'ясо, племінних кролів і шкурки.",
};

export default function Page() {
  return <Sales />;
}
