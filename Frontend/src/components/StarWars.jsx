import FranchiseAccordion from "./FranchiseAccordion";
import { starWarsData } from "../data/starWarsData";

function StarWars({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Star Wars"
      content={starWarsData}
      contentId={"starwars"} 
      completedCount={progressMap.starwars}
    />
  );
}

export default StarWars;