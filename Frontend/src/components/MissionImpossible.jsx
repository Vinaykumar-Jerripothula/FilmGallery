import FranchiseAccordion from "./FranchiseAccordion";
import { missionImpossibleData } from "../data/missionImpossibleData";

function MissionImpossible() {
  return (
    <FranchiseAccordion
      franchiseName="Mission Impossible"
      content={missionImpossibleData}
    />
  );
}

export default MissionImpossible;