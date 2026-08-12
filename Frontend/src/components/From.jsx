import FranchiseAccordion from "./FranchiseAccordion";
import { fromData } from "../data/fromData";

function From({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="From"
      content={fromData}
      contentId={"from"}
      completedCount={progressMap.from || 0}
    />
  );
}

export default From;