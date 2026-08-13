import { millenniumTrilogyData } from "../../data/triology/millenniumTrilogyData";
import FranchiseAccordion from "../template/FranchiseAccordion";

function Millennium({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Millennium"
      content={millenniumTrilogyData}
      contentId={"millennium"}
      completedCount={progressMap.millennium || 0}
    />
  );
}

export default Millennium;