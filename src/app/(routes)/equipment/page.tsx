import type { Metadata } from "next";
import Equipment from "../../_pages/Equipment/Equipment";

export const metadata: Metadata = {
  title: "Обладнання для кролівництва",
  description:
    "Обладнання для кролівництва: клітки, поїлки, годівниці, маточники, інструменти, автоматизовані системи та все необхідне для ефективного ведення господарства.",
};

export default function Page() {
  return <Equipment />;
}
