import FranchiseAccordion from "./FranchiseAccordion";
import { peakyBlindersData } from "../data/peakyBlindersData";

function PeakyBlinders({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Peaky Blinders"
      content={peakyBlindersData}
      contentId={"peakyblinders"}
      completedCount={progressMap.peakyblinders || 0}
    />
  );
}

export default PeakyBlinders;