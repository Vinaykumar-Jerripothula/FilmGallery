import FranchiseAccordion from "./FranchiseAccordion";
import { jamesBondData } from "../data/jamesBondData";

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