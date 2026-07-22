import type { Metadata } from "next";
import InsuranceGrants from "../../_pages/InsuranceGrants/InsuranceGrants";

export const metadata: Metadata = {
  title: "Страхування та гранти для кролівництва",
  description:
    "Страхування та гранти для кролівництва: державні програми підтримки, грантові можливості, страхування господарства та фінансування розвитку кролеферми.",
};

export default function Page() {
  return <InsuranceGrants />;
}
