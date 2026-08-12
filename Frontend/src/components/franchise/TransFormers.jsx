import FranchiseAccordion from "../template/FranchiseAccordion";
import { transformersData } from "../../data/franchise/transformersData";

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