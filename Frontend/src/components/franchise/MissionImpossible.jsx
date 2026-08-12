import FranchiseAccordion from "../template/FranchiseAccordion";
import { missionImpossibleData } from "../../data/franchise/missionImpossibleData";

function MissionImpossible({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Mission Impossible"
      content={missionImpossibleData}
      contentId={"mi"}
      completedCount={progressMap.mi}
    />
  );
}

export default MissionImpossible;