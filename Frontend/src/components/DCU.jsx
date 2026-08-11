import FranchiseAccordion from "./FranchiseAccordion";
import { dcuData } from "../data/dcuData";

function DCU() {
  return (
    <FranchiseAccordion
      franchiseName="DCU Universe"
      content={dcuData}
    />
  );
}

export default DCU;