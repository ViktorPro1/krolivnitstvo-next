import type { Metadata } from "next";
import FirstAid from "../../_pages/FirstAid/FirstAid";

export const metadata: Metadata = {
  title: "Перша допомога кролям",
  description:
    "Перша допомога кролям: дії при травмах, кровотечах, перегріві, переохолодженні, отруєннях та інших невідкладних станах до огляду ветеринаром.",
};

export default function Page() {
  return <FirstAid />;
}
