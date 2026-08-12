import FranchiseAccordion from "./FranchiseAccordion";
import { vikingsData } from "../data/vikingsData";

function Vikings({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Vikings"
      content={vikingsData}
      contentId={"vikings"}
      completedCount={progressMap.vikings || 0}
    />
  );
}

export default Vikings;