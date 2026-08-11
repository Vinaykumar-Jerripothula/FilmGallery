import FranchiseAccordion from "./FranchiseAccordion";
import { dcExtendedUniverseData } from "../data/dcExtendedUniverseData";

function DCEU() {
  return (
    <FranchiseAccordion
      franchiseName="Detective Comics Extended Universe [ Completed Universe ]"
      content={dcExtendedUniverseData}
    />
  );
}

export default DCEU;