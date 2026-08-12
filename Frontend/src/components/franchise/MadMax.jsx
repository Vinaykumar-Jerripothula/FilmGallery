import FranchiseAccordion from "../template/FranchiseAccordion";
import { madMaxData } from "../../data/franchise/madMaxData";

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