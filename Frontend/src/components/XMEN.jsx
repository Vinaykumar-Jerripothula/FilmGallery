import FranchiseAccordion from "./FranchiseAccordion";
import { xmenData } from "../data/xmenData";

function XMEN() {
  return (
    <FranchiseAccordion
      franchiseName="X-MEN Universe"
      content={xmenData}
    />
  );
}

export default XMEN;