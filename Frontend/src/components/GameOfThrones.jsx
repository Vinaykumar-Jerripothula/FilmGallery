import FranchiseAccordion from "./FranchiseAccordion";
import { gameOfThronesData } from "../data/gameOfThronesData";

function GameOfThrones({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Game Of Thrones"
      content={gameOfThronesData}
      contentId="got"
      completedCount={progressMap.got || 0}
    />
  );
}

export default GameOfThrones;