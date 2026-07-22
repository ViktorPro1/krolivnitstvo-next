import type { Metadata } from "next";
import Transport from "../../_pages/Transport/Transport";

export const metadata: Metadata = {
  title: "Транспортування кролів",
  description:
    "Транспортування кролів: правила безпечного перевезення, вибір переноски, підготовка до поїздки, вимоги до температури, годування, напування та зменшення стресу під час транспортування.",
};

export default function Page() {
  return <Transport />;
}
