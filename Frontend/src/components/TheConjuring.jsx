import FranchiseAccordion from "./FranchiseAccordion";
import { theConjuringData } from "../data/theConjuringData";

function TheConjuring() {
  return (
    <FranchiseAccordion
      franchiseName="The Conjuring Universe"
      content={theConjuringData}
    />
  );
}

export default TheConjuring;