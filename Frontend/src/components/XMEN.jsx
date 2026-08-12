import FranchiseAccordion from "./FranchiseAccordion";
import { xmenData } from "../data/xmenData";

function XMEN({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="X-MEN Universe"
      content={xmenData}
      contentId={"xmen"}
      completedCount={progressMap.xmen}
    />
  );
}

export default XMEN;