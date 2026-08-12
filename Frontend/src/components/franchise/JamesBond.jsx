import FranchiseAccordion from "../template/FranchiseAccordion";
import { jamesBondData } from "../../data/franchise/jamesBondData";

function JamesBond({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="James Bond"
      content={jamesBondData}
      contentId={"jamesbond"}
      completedCount={progressMap.jamesbond || 0}
    />
  );
}

export default JamesBond;