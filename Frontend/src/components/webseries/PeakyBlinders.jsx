import FranchiseAccordion from "../template/FranchiseAccordion";
import { peakyBlindersData } from "../../data/webseries/peakyBlindersData";

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