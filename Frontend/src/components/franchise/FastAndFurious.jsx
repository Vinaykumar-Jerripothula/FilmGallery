import FranchiseAccordion from "../template/FranchiseAccordion";
import { fastAndFuriousData } from "../../data/franchise/fastAndFuriousData";

function FastAndFurious({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Fast & Furious"
      content={fastAndFuriousData}
      contentId={"fastandfurious"}
      completedCount={progressMap.fastandfurious || 0}
    />
  );
}

export default FastAndFurious;