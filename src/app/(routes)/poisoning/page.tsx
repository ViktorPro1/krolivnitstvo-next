import type { Metadata } from "next";
import Poisoning from "../../_pages/Poisoning/Poisoning";

export const metadata: Metadata = {
  title: "Отруєння у кролів",
  description:
    "Отруєння у кролів: причини, симптоми, перша допомога, небезпечні рослини, хімічні речовини, лікування та профілактика отруєнь у домашніх і фермерських кролів.",
};

export default function Page() {
  return <Poisoning />;
}
