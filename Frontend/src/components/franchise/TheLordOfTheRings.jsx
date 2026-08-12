import FranchiseAccordion from "../template/FranchiseAccordion";
import { lordOfTheRingsData } from "../../data/franchise/lordOfTheRingsData";

function TheLordOfTheRings({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="The Lord of the Rings"
      content={lordOfTheRingsData}
      contentId={"thelordoftherings"}
      completedCount={progressMap.thelordoftherings || 0}
    />
  );
}

export default TheLordOfTheRings;