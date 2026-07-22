import type { Metadata } from "next";
import FalsePregnancy from "../../_pages/FalsePregnancy/FalsePregnancy";

export const metadata: Metadata = {
  title: "Хибна вагітність у кролиць",
  description:
    "Хибна вагітність у кролиць: причини виникнення, характерні симптоми, тривалість, особливості поведінки та рекомендації щодо подальших дій.",
};

export default function Page() {
  return <FalsePregnancy />;
}
