import FranchiseAccordion from "./FranchiseAccordion";
import { harryPotterData } from "../data/harryPotterData";

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