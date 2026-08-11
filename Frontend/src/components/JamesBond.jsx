import FranchiseAccordion from "./FranchiseAccordion";
import { jamesBondData } from "../data/jamesBondData";

function JamesBond() {
  return (
    <FranchiseAccordion
      franchiseName="James Bond"
      content={jamesBondData}
    />
  );
}

export default JamesBond;