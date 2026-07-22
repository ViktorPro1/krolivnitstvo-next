import type { Metadata } from "next";
import AnesthesiaCare from "../../_pages/AnesthesiaCare/AnesthesiaCare";

export const metadata: Metadata = {
  title: "Анестезія та догляд",
  description:
    "Анестезія кролів, післяопераційний догляд, рекомендації та практичні поради.",
};

export default function Page() {
  return <AnesthesiaCare />;
}
