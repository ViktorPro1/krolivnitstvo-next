import type { Metadata } from "next";
import GroupHousing from "../../_pages/GroupHousing/GroupHousing";

export const metadata: Metadata = {
  title: "Групове утримання кролів",
  description:
    "Групове утримання кролів: переваги, недоліки, формування груп, профілактика бійок, вимоги до простору та особливості догляду.",
};

export default function Page() {
  return <GroupHousing />;
}
