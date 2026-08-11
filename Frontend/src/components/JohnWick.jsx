import FranchiseAccordion from "./FranchiseAccordion";
import { johnWickData } from "../data/johnWickData";

function JohnWick() {
  return (
    <FranchiseAccordion
      franchiseName="John Wick"
      content={johnWickData}
    />
  );
}

export default JohnWick;