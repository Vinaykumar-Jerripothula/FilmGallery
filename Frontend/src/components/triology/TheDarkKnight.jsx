import FranchiseAccordion from "../template/FranchiseAccordion";
import { darkKnightTrilogyData } from "../../data/triology/theDarkKnightData"

function TheDarkKnight({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="The Dark Knight"
      content={darkKnightTrilogyData}
      contentId={"thedarkknight"}
      completedCount={progressMap.thedarkknight || 0}
    />
  );
}

export default TheDarkKnight;