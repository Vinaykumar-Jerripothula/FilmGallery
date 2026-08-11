import FranchiseAccordion from "./FranchiseAccordion";
import { transformersData } from "../data/transformersData";

function TransFormers() {
  return (
    <FranchiseAccordion
      franchiseName="TransFormers"
      content={transformersData}
    />
  );
}

export default TransFormers;