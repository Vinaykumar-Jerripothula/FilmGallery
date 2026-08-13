import { chroniclesOfNarniaData } from "../../data/triology/chroniclesOfNarniaData";
import FranchiseAccordion from "../template/FranchiseAccordion";

function ChroniclesOfNarnia({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Chronicles Of Narnia"
      content={chroniclesOfNarniaData}
      contentId={"chroniclesofnarnia"}
      completedCount={progressMap.chroniclesofnarnia || 0}
    />
  );
}

export default ChroniclesOfNarnia;