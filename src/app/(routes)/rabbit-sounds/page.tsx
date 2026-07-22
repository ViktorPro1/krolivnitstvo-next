import type { Metadata } from "next";
import RabbitSounds from "../../_pages/RabbitSounds/RabbitSounds";

export const metadata: Metadata = {
  title: "Звуки кролів та їх значення",
  description:
    "Звуки кролів: бурчання, писк, гарчання, скрегіт зубами, фиркання та інші звукові сигнали. Як правильно розуміти емоції, самопочуття й поведінку кролів.",
};

export default function Page() {
  return <RabbitSounds />;
}
