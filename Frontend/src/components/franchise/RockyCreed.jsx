import FranchiseAccordion from "../template/FranchiseAccordion";
import { rockyCreedData } from "../../data/franchise/rockyCreedData";

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