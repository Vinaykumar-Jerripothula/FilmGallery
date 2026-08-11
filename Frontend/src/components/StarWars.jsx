import FranchiseAccordion from "./FranchiseAccordion";
import { starWarsData } from "../data/starWarsData";

function StarWars() {
  return (
    <FranchiseAccordion
      franchiseName="Star Wars"
      content={starWarsData}
    />
  );
}

export default StarWars;