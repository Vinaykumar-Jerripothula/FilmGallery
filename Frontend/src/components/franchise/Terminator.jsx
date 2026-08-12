import FranchiseAccordion from "../template/FranchiseAccordion";
import { terminatorData } from "../../data/franchise/terminatorData";

function Terminator({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Terminator"
      content={terminatorData}
      contentId={"terminator"}
      completedCount={progressMap.terminator || 0}
    />
  );
}

export default Terminator;