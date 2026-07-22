import type { Metadata } from "next";
import Leaves from "../../_pages/Leaves/Leaves";

export const metadata: Metadata = {
  title: "Листя для годування кролів",
  description:
    "Листя для кролів: які дерева та рослини безпечні, які можна давати щодня, яких слід уникати, правила заготівлі, сушіння та зберігання.",
};

export default function Page() {
  return <Leaves />;
}
