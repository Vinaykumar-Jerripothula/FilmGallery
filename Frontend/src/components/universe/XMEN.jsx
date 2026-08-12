import FranchiseAccordion from "../template/FranchiseAccordion";
import { xmenData } from "../../data/universe/xmenData";

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