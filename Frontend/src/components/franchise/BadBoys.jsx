import { badBoysData } from "../../data/tetralogy/badboysData";
import FranchiseAccordion from "../template/FranchiseAccordion";

function BadBoys({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Bad Boys"
      content={badBoysData}
      contentId={"badboys"}
      completedCount={progressMap.badboys || 0}
    />
  );
}

export default BadBoys;