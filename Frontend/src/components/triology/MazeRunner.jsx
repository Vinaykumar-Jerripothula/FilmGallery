import FranchiseAccordion from "../template/FranchiseAccordion";
import { mazeRunnerData } from "../../data/triology/mazuRunnerData";

function MazuRunner({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Maze Runner"
      content={mazeRunnerData}
      contentId={"mazerunner"}
      completedCount={progressMap.mazerunner || 0}
    />
  );
}

export default MazuRunner;