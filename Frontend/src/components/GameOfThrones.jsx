import FranchiseAccordion from "./FranchiseAccordion";
import { gameOfThronesData } from "../data/gameOfThronesData";

function GameOfThrones() {
  return (
    <FranchiseAccordion
      franchiseName="Game Of Thrones"
      content={gameOfThronesData}
    />
  );
}

export default GameOfThrones;