import type { Metadata } from "next";
import BuyingRabbit from "../../_pages/BuyingRabbit/BuyingRabbit";

export const metadata: Metadata = {
  title: "Як правильно купити кролика",
  description:
    "Як вибрати здорового кролика перед покупкою: на що звернути увагу, як оцінити стан тварини, уникнути поширених помилок та зробити правильний вибір.",
};

export default function Page() {
  return <BuyingRabbit />;
}
