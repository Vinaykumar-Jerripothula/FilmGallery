import FranchiseAccordion from "./FranchiseAccordion";
import { predatorData } from "../data/predatorData";

function Predator() {
  return (
    <FranchiseAccordion
      franchiseName="Predator"
      content={predatorData}
    />
  );
}

export default Predator;