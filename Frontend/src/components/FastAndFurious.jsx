import FranchiseAccordion from "./FranchiseAccordion";
import { fastAndFuriousData } from "../data/fastAndFuriousData";

function FastAndFurious() {
  return (
    <FranchiseAccordion
      franchiseName="Fast & Furious"
      content={fastAndFuriousData}
    />
  );
}

export default FastAndFurious;