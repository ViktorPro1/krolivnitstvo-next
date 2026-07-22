import type { Metadata } from "next";
import PrivacyPolicy from "../../_pages/Info/PrivacyPolicy/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Політика конфіденційності",
  description:
    "Політика конфіденційності проєкту «Кролівництво від А до Я»: які дані збираються, як вони використовуються, захищаються та які права мають користувачі.",
};

export default function Page() {
  return <PrivacyPolicy />;
}
