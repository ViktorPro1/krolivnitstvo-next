import type { Metadata } from "next";
import OkrilControl from "../../_pages/OkrilControl/OkrilControl";

export const metadata: Metadata = {
  title: "Контроль окролу кролиці",
  description:
    "Контроль окролу кролиці: перевірка гнізда, огляд новонароджених кроленят, оцінка стану матері, виявлення можливих проблем та рекомендації щодо догляду після окролу.",
};

export default function Page() {
  return <OkrilControl />;
}
