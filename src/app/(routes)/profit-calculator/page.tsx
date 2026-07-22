import type { Metadata } from "next";
import ProfitCalc from "../../_pages/ProfitCalc/ProfitCalc";

export const metadata: Metadata = {
  title: "Калькулятор прибутку кролеферми",
  description:
    "Калькулятор прибутку в кролівництві: розрахунок доходів, витрат, собівартості, рентабельності та очікуваного прибутку від вирощування кролів.",
};

export default function Page() {
  return <ProfitCalc />;
}
