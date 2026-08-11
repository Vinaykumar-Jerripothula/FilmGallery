import FranchiseAccordion from "./FranchiseAccordion";
import { lordOfTheRingsData } from "../data/lordOfTheRingsData";

function TheLordOfTheRings() {
  return (
    <FranchiseAccordion
      franchiseName="The Lord of the Rings"
      content={lordOfTheRingsData}
    />
  );
}

export default TheLordOfTheRings;