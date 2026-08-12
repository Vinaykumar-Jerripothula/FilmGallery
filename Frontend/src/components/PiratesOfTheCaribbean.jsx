import FranchiseAccordion from "./FranchiseAccordion";
import { piratesOfTheCaribbeanData } from "../data/piratesOfTheCaribbeanData";

function PiratesOfTheCaribbean({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Pirates Of The Caribbean"
      content={piratesOfTheCaribbeanData}
      contentId={"pofc"}
      completedCount={progressMap.pofc || 0}
    />
  );
}

export default PiratesOfTheCaribbean;