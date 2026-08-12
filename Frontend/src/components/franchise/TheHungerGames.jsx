import FranchiseAccordion from "../template/FranchiseAccordion";
import { theHungerGames } from "../../data/franchise/theHungerGames";

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