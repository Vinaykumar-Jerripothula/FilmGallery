import FranchiseAccordion from "./FranchiseAccordion";
import { darkData } from "../data/darkData";

function Dark() {
  return (
    <FranchiseAccordion
      franchiseName="Dark"
      content={darkData}
    />
  );
}

export default Dark;