import FranchiseAccordion from "./FranchiseAccordion";
import { terminatorData } from "../data/terminatorData";

function Terminator() {
  return (
    <FranchiseAccordion
      franchiseName="Terminator"
      content={terminatorData}
    />
  );
}

export default Terminator;