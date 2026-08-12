import FranchiseAccordion from "../template/FranchiseAccordion";
import { piratesOfTheCaribbeanData } from "../../data/franchise/piratesOfTheCaribbeanData";

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