import FranchiseAccordion from "../template/FranchiseAccordion";
import { starWarsData } from "../../data/universe/starWarsData";

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