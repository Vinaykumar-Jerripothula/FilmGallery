import FranchiseAccordion from "./FranchiseAccordion";
import { fastAndFuriousData } from "../data/fastAndFuriousData";

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