import FranchiseAccordion from "./FranchiseAccordion";
import { alienData } from "../data/alienData";

function Alien({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Alien"
      content={alienData}
      contentId={"alien"}
      completedCount={progressMap.mcu || 0}
    />
  );
}

export default Alien;