import FranchiseAccordion from "../template/FranchiseAccordion";
import { fromData } from "../../data/webseries/fromData";

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