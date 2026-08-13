import { beforeTrilogyData } from "../../data/triology/beforeTrilogyData";
import FranchiseAccordion from "../template/FranchiseAccordion";

function Before({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Before"
      content={beforeTrilogyData}
      contentId={"beofre"}
      completedCount={progressMap.before || 0}
    />
  );
}

export default Before;