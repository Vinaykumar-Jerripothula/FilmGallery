import FranchiseAccordion from "../template/FranchiseAccordion";
import { darkData } from "../../data/webseries/darkData";

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