import FranchiseAccordion from "../template/FranchiseAccordion";
import { dcExtendedUniverseData } from "../../data/universe/dcExtendedUniverseData";

function DCEU({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName={"Detective Comics Extended Universe"}
      content={dcExtendedUniverseData}
      contentId="dceu"
      completedCount={progressMap.dceu || 0}
    />
  );
}

export default DCEU;