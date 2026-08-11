import FranchiseAccordion from "./FranchiseAccordion";
import { madMaxData } from "../data/madMaxData";

function MadMax() {
  return (
    <FranchiseAccordion
      franchiseName="Mad Max"
      content={madMaxData}
    />
  );
}

export default MadMax;