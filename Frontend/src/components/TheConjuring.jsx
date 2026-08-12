import FranchiseAccordion from "./FranchiseAccordion";
import { theConjuringData } from "../data/theConjuringData";

function TheConjuring({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="The Conjuring Universe"
      content={theConjuringData}
      contentId={"theconjuring"}
      completedCount={progressMap.theconjuring || 0}
    />
  );
}

export default TheConjuring;