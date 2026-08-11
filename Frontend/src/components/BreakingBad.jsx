import FranchiseAccordion from "./FranchiseAccordion";
import { breakingBadUniverseData } from "../data/breakingBadUniverseData";

function BreakingBad() {
  return (
    <FranchiseAccordion
      franchiseName="Breaking Bad"
      content={breakingBadUniverseData}
    />
  );
}

export default BreakingBad;