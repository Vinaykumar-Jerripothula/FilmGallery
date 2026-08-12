import FranchiseAccordion from "./FranchiseAccordion";
import { transformersData } from "../data/transformersData";

function TransFormers({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="TransFormers"
      content={transformersData}
      contentId={"transformers"}
      completedCount={progressMap.transformers || 0}
    />
  );
}

export default TransFormers;