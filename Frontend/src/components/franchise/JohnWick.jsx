import FranchiseAccordion from "../template/FranchiseAccordion";
import { johnWickData } from "../../data/franchise/johnWickData";

function JohnWick({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="John Wick"
      content={johnWickData}
      contentId={"johnwick"}
      completedCount={progressMap.johnWick || 0}
      />
  );
}

export default JohnWick;