import FranchiseAccordion from "../template/FranchiseAccordion";
import { alienData } from "../../data/franchise/alienData";

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