import FranchiseAccordion from "../template/FranchiseAccordion";
import { predatorData } from "../../data/franchise/predatorData";

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