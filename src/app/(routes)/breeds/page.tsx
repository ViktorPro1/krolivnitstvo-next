import type { Metadata } from "next";
import Breeds from "../../_pages/Breeds/Breeds";

export const metadata: Metadata = {
  title: "Породи кролів",
  description:
    "Каталог порід кролів із детальним описом, характеристиками, особливостями утримання, продуктивністю та рекомендаціями щодо вибору породи.",
};

export default function Page() {
  return <Breeds />;
}
