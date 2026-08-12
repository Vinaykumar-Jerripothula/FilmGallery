import FranchiseAccordion from "./FranchiseAccordion";
import { missionImpossibleData } from "../data/missionImpossibleData";

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