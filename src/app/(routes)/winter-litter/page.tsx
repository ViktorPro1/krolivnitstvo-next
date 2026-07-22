import type { Metadata } from "next";
import WinterLitter from "../../_pages/WinterLitter/WinterLitter";

export const metadata: Metadata = {
  title: "Зимові окроли кролів",
  description:
    "Зимові окроли кролів: підготовка крільчатника, утеплення маточників, особливості годівлі та догляду, підтримання температури, профілактика переохолодження й успішне вирощування кроленят узимку.",
};

export default function Page() {
  return <WinterLitter />;
}
