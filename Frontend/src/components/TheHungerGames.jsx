import FranchiseAccordion from "./FranchiseAccordion";
import { theHungerGames } from "../data/theHungerGames";

function TheHungerGames({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="The Hunger Games"
      content={theHungerGames}
      contentId={"thehungergames"}
      completedCount={progressMap.thehungergames || 0}
    />
  );
}

export default TheHungerGames;