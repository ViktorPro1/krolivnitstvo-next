import type { Metadata } from "next";
import Recipes from "../../_pages/Recipes/Recipes";

export const metadata: Metadata = {
  title: "Рецепти з м'яса кролика",
  description:
    "Рецепти з м'яса кролика: смачні та корисні страви, запікання, тушкування, супи, шашлик, домашні ковбаси, поради з приготування та збереження ніжності кролятини.",
};

export default function Page() {
  return <Recipes />;
}
