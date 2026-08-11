import FranchiseAccordion from "./FranchiseAccordion";
import { starTrekData } from "../data/starTrekData";

function StarTrek() {
  return (
    <FranchiseAccordion
      franchiseName="Star Trek"
      content={starTrekData}
    />
  );
}

export default StarTrek;