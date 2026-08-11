import FranchiseAccordion from "./FranchiseAccordion";
import { theHungerGames } from "../data/theHungerGames";

function TheHungerGames() {
  return (
    <FranchiseAccordion
      franchiseName="The Hunger Games"
      content={theHungerGames}
    />
  );
}

export default TheHungerGames;