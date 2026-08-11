import FranchiseAccordion from "./FranchiseAccordion";
import { alienData } from "../data/alienData";

function Alien() {
  return (
    <FranchiseAccordion
      franchiseName="Alien"
      content={alienData}
    />
  );
}

export default Alien;