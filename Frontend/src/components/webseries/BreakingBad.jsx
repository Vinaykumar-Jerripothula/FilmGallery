import FranchiseAccordion from "../template/FranchiseAccordion";
import { breakingBadUniverseData } from "../../data/webseries/breakingBadUniverseData";

function BreakingBad({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Breaking Bad"
      content={breakingBadUniverseData}
      contentId={"breakingbad"}
      completedCount={progressMap.breakingbad || 0}
    />
  );
}

export default BreakingBad;