import FranchiseAccordion from "./FranchiseAccordion";
import { vikingsData } from "../data/vikingsData";

function Vikings() {
  return (
    <FranchiseAccordion
      franchiseName="Vikings"
      content={vikingsData}
    />
  );
}

export default Vikings;