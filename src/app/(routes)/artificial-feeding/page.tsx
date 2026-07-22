import type { Metadata } from "next";
import ArtificialFeeding from "../../_pages/ArtificialFeeding/ArtificialFeeding";

export const metadata: Metadata = {
  title: "Штучне вигодовування кроленят",
  description:
    "Штучне вигодовування кроленят: коли воно необхідне, чим годувати, режим годування та практичні рекомендації.",
};

export default function Page() {
  return <ArtificialFeeding />;
}
