import FranchiseAccordion from "./FranchiseAccordion";
import { strangerThingsData } from "../data/strangerThingsData";

function StrangerThings() {
  return (
    <FranchiseAccordion
      franchiseName="Stranger Things"
      content={strangerThingsData}
    />
  );
}

export default StrangerThings;