import FranchiseAccordion from "./FranchiseAccordion";
import { johnWickData } from "../data/johnWickData";

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