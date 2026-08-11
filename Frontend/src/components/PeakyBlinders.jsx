import FranchiseAccordion from "./FranchiseAccordion";
import { peakyBlindersData } from "../data/peakyBlindersData";

function PeakyBlinders() {
  return (
    <FranchiseAccordion
      franchiseName="Peaky Blinders"
      content={peakyBlindersData}
    />
  );
}

export default PeakyBlinders;