import { matrixData } from "../../data/tetralogy/theMatrix";
import FranchiseAccordion from "../template/FranchiseAccordion";

function TheMatrix({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="The Matrix"
      content={matrixData}
      contentId={"thematrix"}
      completedCount={progressMap.thematrix || 0}
    />
  );
}

export default TheMatrix;