import FranchiseAccordion from "../template/FranchiseAccordion";
import { starTrekData } from "../../data/franchise/starTrekData";

function StarTrek({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Star Trek"
      content={starTrekData}
      contentId={"startrek"}
      completedCount={progressMap.startrek || 0}
    />
  );
}

export default StarTrek;