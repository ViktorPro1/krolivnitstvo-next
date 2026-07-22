import type { Metadata } from "next";
import Community from "../../_pages/Community/Community";

export const metadata: Metadata = {
  title: "Спільнота кролівників",
  description:
    "Спільнота «Кролівництво від А до Я»: обмін досвідом, спілкування, корисні поради, обговорення та підтримка кролівників.",
};

export default function Page() {
  return <Community />;
}
