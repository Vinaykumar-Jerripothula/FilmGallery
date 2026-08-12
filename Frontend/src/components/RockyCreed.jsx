import FranchiseAccordion from "./FranchiseAccordion";
import { rockyCreedData } from "../data/rockyCreedData";

function RockyCreed({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Rocky / Creed"
      content={rockyCreedData}
      contentId={"rockyandcreed"}
      completedCount={progressMap.rockyandcreed || 0}
    />
  );
}

export default RockyCreed;