import FranchiseAccordion from "./FranchiseAccordion";
import { madMaxData } from "../data/madMaxData";

function MadMax({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Mad Max"
      content={madMaxData}
      contentId={"madmax"}
      completedCount={progressMap.madmax  || 0}
    />
  );
}

export default MadMax;