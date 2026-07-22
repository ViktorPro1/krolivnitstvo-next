import type { Metadata } from "next";
import Grooming from "../../_pages/Grooming/Grooming";

export const metadata: Metadata = {
  title: "Догляд за шерстю та кігтями кролів",
  description:
    "Догляд за шерстю та кігтями кролів: розчісування, стрижка кігтів, профілактика ковтунів, линяння та підтримання здорового зовнішнього вигляду тварин.",
};

export default function Page() {
  return <Grooming />;
}
