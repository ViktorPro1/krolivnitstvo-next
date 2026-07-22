import type { Metadata } from "next";
import RabbitBehaviorProblems from "../../_pages/RabbitBehaviorProblems/RabbitBehaviorProblems";

export const metadata: Metadata = {
  title: "Поведінкові проблеми кролів",
  description:
    "Поведінкові проблеми кролів: агресія, кусання, мічення території, гризіння предметів, страх, стрес та способи корекції небажаної поведінки.",
};

export default function Page() {
  return <RabbitBehaviorProblems />;
}
