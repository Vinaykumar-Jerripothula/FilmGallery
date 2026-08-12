import FranchiseAccordion from "../template/FranchiseAccordion";
import { harryPotterData } from "../../data/franchise/harryPotterData";

function HarryPotter({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Harry Potter"
      content={harryPotterData}
      contentId="harrypotter"
      completedCount={progressMap.harrypotter || 0}
    />
  );
}

export default HarryPotter;