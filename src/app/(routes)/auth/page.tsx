import type { Metadata } from "next";
import Auth from "../../_pages/Auth/Auth";

export const metadata: Metadata = {
  title: "Вхід до облікового запису",
  description:
    "Увійдіть або зареєструйтеся, щоб отримати доступ до персональних можливостей платформи «Кролівництво від А до Я».",
};

export default function Page() {
  return <Auth />;
}
