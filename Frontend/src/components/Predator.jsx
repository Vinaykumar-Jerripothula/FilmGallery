import FranchiseAccordion from "./FranchiseAccordion";
import { predatorData } from "../data/predatorData";

function Predator({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Predator"
      content={predatorData}
      contentId={"predator"}
      completedCount={progressMap.predator}
    />
  );
}

export default Predator;