import type { Metadata } from "next";
import MatingBehavior from "../../_pages/MatingBehavior/MatingBehavior";

export const metadata: Metadata = {
  title: "Поведінка кролів під час парування",
  description:
    "Поведінка кролів під час парування: ознаки статевої охоти у кролиць, поведінка самців, підготовка до парування, можливі проблеми та практичні рекомендації.",
};

export default function Page() {
  return <MatingBehavior />;
}
