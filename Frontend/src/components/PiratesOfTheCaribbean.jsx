import FranchiseAccordion from "./FranchiseAccordion";
import { piratesOfTheCaribbeanData } from "../data/piratesOfTheCaribbeanData";

function PiratesOfTheCaribbean() {
  return (
    <FranchiseAccordion
      franchiseName="Pirates Of The Caribbean"
      content={piratesOfTheCaribbeanData}
    />
  );
}

export default PiratesOfTheCaribbean;