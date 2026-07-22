import type { Metadata } from "next";
import ApartmentProofing from "../../_pages/ApartmentProofing/ApartmentProofing";

export const metadata: Metadata = {
  title: "Підготовка квартири для кролика",
  description:
    "Як підготувати квартиру до появи кролика: безпечне середовище, захист меблів і проводів, поради щодо комфортного утримання.",
};

export default function Page() {
  return <ApartmentProofing />;
}
