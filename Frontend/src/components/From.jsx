import FranchiseAccordion from "./FranchiseAccordion";
import { fromData } from "../data/fromData";

function From() {
  return (
    <FranchiseAccordion
      franchiseName="From"
      content={fromData}
    />
  );
}

export default From;