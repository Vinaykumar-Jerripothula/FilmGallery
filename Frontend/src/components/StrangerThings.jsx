import FranchiseAccordion from "./FranchiseAccordion";
import { strangerThingsData } from "../data/strangerThingsData";

function StrangerThings({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Stranger Things"
      content={strangerThingsData}
      contentId={"strangerthings"}
      completedCount={progressMap.strangerthings || 0}
    />
  );
}

export default StrangerThings;