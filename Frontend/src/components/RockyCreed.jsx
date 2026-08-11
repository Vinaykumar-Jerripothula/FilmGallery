import FranchiseAccordion from "./FranchiseAccordion";
import { rockyCreedData } from "../data/rockyCreedData";

function RockyCreed() {
  return (
    <FranchiseAccordion
      franchiseName="Rocky / Creed"
      content={rockyCreedData}
    />
  );
}

export default RockyCreed;