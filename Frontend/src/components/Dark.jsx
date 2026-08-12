import FranchiseAccordion from "./FranchiseAccordion";
import { darkData } from "../data/darkData";

function Dark({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Dark"
      content={darkData}
      contentId={"dark"}
      completedCount={progressMap.dark || 0}
    />
  );
}

export default Dark;