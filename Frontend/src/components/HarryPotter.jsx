import FranchiseAccordion from "./FranchiseAccordion";
import { harryPotterData } from "../data/harryPotterData";

function HarryPotter() {
  return (
    <FranchiseAccordion
      franchiseName="Harry Potter"
      content={harryPotterData}
    />
  );
}

export default HarryPotter;